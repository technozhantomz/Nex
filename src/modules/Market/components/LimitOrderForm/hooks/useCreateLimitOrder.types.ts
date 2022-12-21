import { Dispatch, SetStateAction } from "react";

import { SignerKey } from "../../../../../common/types";
import { FormInstance, Rule } from "../../../../../ui/src";
import { OrderForm, PairAssets } from "../../../types";

export type UseCreateLimitOrderArgs = {
  selectedAssets: PairAssets | undefined;
  loadingSelectedPair: boolean;
  isBuyOrder: boolean;
  orderForm: FormInstance<OrderForm>;
};

export type UseCreateLimitOrderResult = {
  fees: { feeAmount: number; marketFeePercent: number };
  balance: number;
  formValidation: FormValidation;
  handleValuesChange: (changedValues: any, allValues: any) => void;
  handleCreateLimitOrder: (signerKey: SignerKey) => Promise<void>;
  transactionErrorMessage: string;
  setTransactionErrorMessage: Dispatch<SetStateAction<string>>;
  transactionSuccessMessage: string;
  setTransactionSuccessMessage: Dispatch<SetStateAction<string>>;
  loadingTransaction: boolean;
  price: string;
  quantity: string;
  total: string;
};

export type FormField = {
  field: string;
  fullField: string;
  type: string;
  validator: unknown;
};

export type FormValidation = {
  price: Rule[];
  quantity: Rule[];
  total: Rule[];
};
