import { FormInstance } from "antd/lib/form";
import FormFinishInfo from "rc-field-form";

export type MembershipTabTypes = {
  handleMembershipUpgrade: (password: string) => void;
  requestedKey: string | undefined;
  isMembershipModalVisible: boolean;
  handleCancel: () => void;
  handleOk: () => void;
  confirmLoading: boolean;
  modalText: string;
  visible: boolean;
  onCancel: () => void;
  onFormFinish: (name: string, info: FormFinishInfo) => void;
  membershipForm: FormInstance<MembershipFormData>;
  confirm: () => void;
  isEnableToPay: boolean;
};

export type MembershipFormData = {
  password: string;
};
