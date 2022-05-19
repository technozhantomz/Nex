import { ChangeEvent, Dispatch, SetStateAction } from "react";

import {
  PasswordModal,
  TransactionModal,
} from "../../../../../../common/components";
import { useHandleTransactionForm } from "../../../../../../common/hooks";
import { useViewportContext } from "../../../../../../common/providers";
import { Account, Proxy } from "../../../../../../common/types";
import { Form, RedoOutlined } from "../../../../../../ui/src";

import * as Styled from "./ProxyForm.styled";

type Props = {
  name: string;
  proxy: Proxy;
  loading: boolean;
  searchError: boolean;
  searchedAccount: Account | undefined;
  updateAccountFee: number;
  loadingTransaction: boolean;
  transactionErrorMessage: string;
  transactionSuccessMessage: string;
  addProxy: (account: Account) => void;
  removeProxy: () => void;
  searchChange: (inputEvent: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handlePublishChanges: (password: string) => Promise<void>;
  setTransactionErrorMessage: Dispatch<SetStateAction<string>>;
  setTransactionSuccessMessage: Dispatch<SetStateAction<string>>;
  isPublishable: boolean;
  resetChanges: () => void;
  searchValue: string;
  isSameAccount: boolean;
};

export const ProxyForm = ({
  name,
  proxy,
  loading,
  searchError,
  searchedAccount,
  updateAccountFee,
  loadingTransaction,
  transactionErrorMessage,
  transactionSuccessMessage,
  addProxy,
  searchValue,
  searchChange,
  handlePublishChanges,
  setTransactionErrorMessage,
  setTransactionSuccessMessage,
  isPublishable,
  resetChanges,
  isSameAccount,
}: Props): JSX.Element => {
  const [proxyForm] = Form.useForm();
  const {
    isPasswordModalVisible,
    isTransactionModalVisible,
    showPasswordModal,
    hidePasswordModal,
    handleFormFinish,
    hideTransactionModal,
  } = useHandleTransactionForm({
    handleTransactionConfirmation: handlePublishChanges,
    setTransactionErrorMessage,
    setTransactionSuccessMessage,
  });
  const { sm } = useViewportContext();

  return (
    <>
      <Styled.ProxySearchWrapper>
        <Form.Item
          className="search-input"
          validateStatus={searchError ? "error" : undefined}
          help={
            searchError
              ? isSameAccount
                ? "Same as your account"
                : "Account not found"
              : undefined
          }
        >
          <Styled.ProxyFormSearch
            value={searchValue}
            placeholder="Search Accounts"
            onChange={searchChange}
            onPressEnter={() => {
              addProxy(searchedAccount as Account);
            }}
            loading={loading}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Styled.ProxyFormButton
            type="primary"
            onClick={() => addProxy(searchedAccount as Account)}
            disabled={searchError || searchedAccount === undefined}
          >
            Add
          </Styled.ProxyFormButton>
        </Form.Item>
      </Styled.ProxySearchWrapper>
      <Form.Provider onFormFinish={handleFormFinish}>
        <Styled.ProxyForm
          form={proxyForm}
          name="proxyForm"
          onFinish={showPasswordModal}
          size="large"
          layout={sm ? "horizontal" : "inline"}
        >
          <Form.Item className="publish-btn">
            <Styled.ProxyFormButton
              type="primary"
              htmlType="submit"
              disabled={!isPublishable}
            >
              Publish changes
            </Styled.ProxyFormButton>
          </Form.Item>
          <Form.Item>
            <Styled.ProxyFormButton
              disabled={!isPublishable}
              type="link"
              onClick={resetChanges}
            >
              <RedoOutlined rotate={-90} /> Reset changes
            </Styled.ProxyFormButton>
          </Form.Item>
        </Styled.ProxyForm>
        <PasswordModal
          visible={isPasswordModalVisible}
          onCancel={hidePasswordModal}
        />
        <TransactionModal
          visible={isTransactionModalVisible}
          onCancel={hideTransactionModal}
          transactionErrorMessage={transactionErrorMessage}
          transactionSuccessMessage={transactionSuccessMessage}
          loadingTransaction={loadingTransaction}
          account={name}
          fee={updateAccountFee}
          transactionType="account_update"
          proxy={proxy}
          memberType="Proxy"
          desiredMembers={1}
        />
      </Form.Provider>
    </>
  );
};