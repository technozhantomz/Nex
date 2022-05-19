import { Proxy } from "../../../../common/types";
//import { InfoCircleOutlined } from "../../../../ui/src";

import * as Styled from "./ProxyTab.styled";
import { ProxyForm, ProxyTable } from "./components";
import { useProxyTab } from "./hooks";

type Props = {
  totalGpos: number;
  serverProxy: Proxy;
  getProxyAccount: (proxyId: string) => Promise<void>;
  loading: boolean;
};

export const ProxyTab = ({
  totalGpos,
  serverProxy,
  getProxyAccount,
  loading,
}: Props): JSX.Element => {
  const {
    name,
    searchError,
    searchedAccount,
    updateAccountFee,
    loadingTransaction,
    transactionErrorMessage,
    transactionSuccessMessage,
    addProxy,
    removeProxy,
    searchChange,
    handlePublishChanges,
    setTransactionErrorMessage,
    setTransactionSuccessMessage,
    localProxy,
    isPublishable,
    resetChanges,
    searchValue,
    isSameAccount,
  } = useProxyTab({ serverProxy, totalGpos, getProxyAccount });
  return (
    <Styled.ProxyTabWrapper>
      <Styled.ProxyIntroWrapper>
        <Styled.ProxyTitle>Proxy your vote to other accounts</Styled.ProxyTitle>
        {/* <Styled.ProxyInfoLink>
          <InfoCircleOutlined /> <a>See details here</a>
        </Styled.ProxyInfoLink> */}
      </Styled.ProxyIntroWrapper>
      <ProxyForm
        name={name}
        proxy={localProxy}
        loading={loading}
        searchError={searchError}
        searchedAccount={searchedAccount}
        updateAccountFee={updateAccountFee}
        loadingTransaction={loadingTransaction}
        transactionErrorMessage={transactionErrorMessage}
        transactionSuccessMessage={transactionSuccessMessage}
        addProxy={addProxy}
        removeProxy={removeProxy}
        searchChange={searchChange}
        handlePublishChanges={handlePublishChanges}
        setTransactionErrorMessage={setTransactionErrorMessage}
        setTransactionSuccessMessage={setTransactionSuccessMessage}
        isPublishable={isPublishable}
        resetChanges={resetChanges}
        searchValue={searchValue}
        isSameAccount={isSameAccount}
      />
      <ProxyTable
        loading={loading}
        proxy={localProxy}
        removeProxy={removeProxy}
      />
    </Styled.ProxyTabWrapper>
  );
};