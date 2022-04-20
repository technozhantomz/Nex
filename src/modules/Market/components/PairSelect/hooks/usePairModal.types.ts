import { FormInstance, Rule } from "../../../../../ui/src";

export type UsePairModalResult = {
  isVisible: boolean;
  pairModalForm: FormInstance<PairForm>;
  allAssetsSymbols: string[];
  formValdation: FormValidation;
  useResetFormOnCloseModal: (
    form: FormInstance<PairForm>,
    visible: boolean
  ) => void;
  handleCancel: () => void;
  handleSelectPair: () => void;
  handleClickOnPair: () => void;
  handleSelectRecent: (value: string) => void;
};

export type FormValidation = {
  quote: Rule[];
  base: Rule[];
};

export type PairForm = {
  quote: string;
  base: string;
};
