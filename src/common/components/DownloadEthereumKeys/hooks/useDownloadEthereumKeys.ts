import counterpart from "counterpart";
import { useState } from "react";

import { useGenerateEthereumAddress } from "../../GenerateEthereumAddress/hooks";

import { UseDownloadEthereumKeysResult } from "./useDownloadEthereumKeys.types";

type Args = {
  getSidechainAccounts: (accountId: string) => Promise<void>;
};

export function useDownloadEthereumKeys({
  getSidechainAccounts,
}: Args): UseDownloadEthereumKeysResult {
  const [downloaded, setDownloaded] = useState<boolean>(true);
  const {
    sessionEthereumSidechainAccounts,
    setSessionEthereumSidechainAccounts,
  } = useGenerateEthereumAddress(getSidechainAccounts);

  if (sessionEthereumSidechainAccounts && downloaded) {
    setDownloaded(false);
  }

  const downloadPrivateKeys = (sidechainDepositAddress: string): void => {
    const element = document.createElement("a");
    const fileContents = `
      \n##### ${counterpart.translate(
        "file_content.peerplays_eth_deposit_address"
      )} #####
      \nAddress: ${sidechainDepositAddress}
      \n
      \n###### ${counterpart.translate(
        "file_content.eth_deposit_account"
      )} (${counterpart.translate(
      "file_content.eth_deposit_account_description"
    )}) ######
      \nAddress: ${sessionEthereumSidechainAccounts?.deposit.address}
      \nPublic Key: ${sessionEthereumSidechainAccounts?.deposit.pubKey}
      \nPrivate Key: ${sessionEthereumSidechainAccounts?.deposit.privateKey}
      \n
      \n###### ${counterpart.translate(
        `file_content.eth_withdraw_account`
      )} ######
      \nAddress: ${sessionEthereumSidechainAccounts?.withdraw.address}
      \nPublic Key: ${sessionEthereumSidechainAccounts?.withdraw.pubKey}
      \nPrivate Key: ${sessionEthereumSidechainAccounts?.withdraw.privateKey}
      \n
        `;

    const file = new Blob([fileContents], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "Keys.txt";
    element.id = "download-keys";
    document.body.appendChild(element);
    element.click();
    element.remove();
    setDownloaded(true);
    setSessionEthereumSidechainAccounts(undefined);
  };

  return { downloaded, downloadPrivateKeys };
}