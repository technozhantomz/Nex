import { Tabs } from "antd";
import type { NextPage } from "next";
import React from "react";

import { Layout } from "../../../../common/components";
import { WitnessTab } from "../../components/WitnessTab";

import * as Styled from "./VotingPage.styled";

const { TabPane } = Tabs;

const VotingPage: NextPage = () => {
  return (
    <Layout
      title="Voting"
      type="card-lrg"
      heading="Voting"
      description="Voting Page"
      dexLayout={true}
    >
      <Styled.VottingPageCard>
        <Tabs defaultActiveKey="1">
          <TabPane tab="GPOS" key="1">
            <Styled.Text>GPOS Tab</Styled.Text>
          </TabPane>
          <TabPane tab="Witness" key="2">
            <WitnessTab />
          </TabPane>
          <TabPane tab="SONs" key="3">
            <Styled.Text>SONs Tab</Styled.Text>
          </TabPane>
          <TabPane tab="Advisors" key="4">
            <Styled.Text>Advisors Tab</Styled.Text>
          </TabPane>
          <TabPane tab="Proxy" key="5">
            <Styled.Text>Proxy Tab</Styled.Text>
          </TabPane>
        </Tabs>
      </Styled.VottingPageCard>
    </Layout>
  );
};
export default VotingPage;