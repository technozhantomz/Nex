import type { NextPage } from "next";

import { Layout } from "../../../../common/components/PageLayout";
import { AssetsTable } from "../../components/AssetsTable";

import * as Styled from "./WalletPage.styled";

const { TabPane } = Styled.Tabs;

const WalletPage: NextPage = () => {
  return (
    <Layout
      title="Wallet"
      type="card-lrg"
      heading="Wallet"
      description="Wallet Page"
      dexLayout={true}
    >
      <Styled.WalletCard>
        <Styled.Tabs defaultActiveKey="1" centered={true}>
          <TabPane tab="Assets" key="1">
            <AssetsTable />
          </TabPane>
          <TabPane tab="Contacts" key="2"></TabPane>
        </Styled.Tabs>
      </Styled.WalletCard>
    </Layout>
  );
};

export default WalletPage;
