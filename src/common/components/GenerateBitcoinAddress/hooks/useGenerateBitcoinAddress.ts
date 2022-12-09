import * as bitcoin from "bitcoinjs-lib";
import counterpart from "counterpart";
import ECPairFactory from "ecpair";
import { useCallback, useState } from "react";
import * as ecc from "tiny-secp256k1";

import { testnetCheck } from "../../../../api/params";
import {
  useSidechainTransactionBuilder,
  useSonNetwork,
  useTransactionBuilder,
} from "../../../hooks";
import { useUserContext } from "../../../providers";
import { BitcoinAccount, SignerKey } from "../../../types";

import { UseGenerateBitcoinAddressResult } from "./useGenerateBitcoinAddress.types";

const NETWORK = testnetCheck ? bitcoin.networks.regtest : undefined;

export function useGenerateBitcoinAddress(
  getSidechainAccounts: (accountId: string) => Promise<void>
): UseGenerateBitcoinAddressResult {
  const [transactionErrorMessage, setTransactionErrorMessage] =
    useState<string>("");
  const [transactionSuccessMessage, setTransactionSuccessMessage] =
    useState<string>("");
  const [loadingTransaction, setLoadingTransaction] = useState<boolean>(false);

  const { buildTrx } = useTransactionBuilder();
  const { id } = useUserContext();
  const { getSonNetworkStatus } = useSonNetwork();
  const { buildAddingSidechainTransaction } = useSidechainTransactionBuilder();
  const { bitcoinSidechainAccounts, setBitcoinSidechainAccounts } =
    useUserContext();

  const toHex = useCallback((buffer: any) => {
    return Array.from(buffer)
      .map((byte: any) => byte.toString(16).padStart(2, "0"))
      .join("");
  }, []);

  const generateNewAddress = (): BitcoinAccount => {
    const ECPair = ECPairFactory(ecc);
    const keyPair = ECPair.makeRandom({ network: NETWORK });
    const address = bitcoin.payments.p2pkh({
      pubkey: keyPair.publicKey,
      network: NETWORK,
    });
    return {
      address: address.address as string,
      pubKey: toHex(address.pubkey),
      privateKey: keyPair.toWIF(),
    };
  };

  const generateBitcoinAddresses = useCallback(
    async (signerKey: SignerKey) => {
      setTransactionErrorMessage("");
      setLoadingTransaction(true);

      try {
        const sonNetworkStatus = await getSonNetworkStatus();

        if (!sonNetworkStatus.isSonNetworkOk) {
          setTransactionErrorMessage(
            counterpart.translate(`field.errors.sons_not_available_try_again`)
          );
          setLoadingTransaction(false);
          return;
        }
      } catch (e) {
        console.log(e);
        setTransactionErrorMessage(
          counterpart.translate(`field.errors.sons_not_available_try_again`)
        );
        setLoadingTransaction(false);
        return;
      }
      const deposit = generateNewAddress();
      const withdraw = generateNewAddress();

      setBitcoinSidechainAccounts({ deposit, withdraw });

      const trx = buildAddingSidechainTransaction(
        id,
        id,
        deposit.pubKey,
        deposit.address,
        withdraw.pubKey,
        withdraw.address
      );

      let trxResult;

      try {
        trxResult = await buildTrx([trx], [signerKey]);
      } catch (error) {
        console.log(error);
        setTransactionErrorMessage(
          counterpart.translate(`field.errors.transaction_unable`)
        );
        setLoadingTransaction(false);
      }
      if (trxResult) {
        setTimeout(async () => {
          await getSidechainAccounts(id);
        }, 3000);
        setTransactionErrorMessage("");
        setTransactionSuccessMessage(
          counterpart.translate(
            `field.success.successfully_generate_btc_addresses`
          )
        );
        setLoadingTransaction(false);
      } else {
        setTransactionErrorMessage(
          counterpart.translate(`field.errors.transaction_unable`)
        );
        setLoadingTransaction(false);
      }
    },
    [
      buildAddingSidechainTransaction,
      buildTrx,
      getSidechainAccounts,
      setBitcoinSidechainAccounts,
      setTransactionErrorMessage,
      setLoadingTransaction,
      setTransactionSuccessMessage,
      id,
      getSonNetworkStatus,
    ]
  );

  return {
    bitcoinSidechainAccounts,
    setBitcoinSidechainAccounts,
    transactionErrorMessage,
    transactionSuccessMessage,
    setTransactionErrorMessage,
    setTransactionSuccessMessage,
    loadingTransaction,
    generateBitcoinAddresses,
  };
}
