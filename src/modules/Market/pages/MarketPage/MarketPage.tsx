import type { NextPage } from "next";
import React from "react";

import { Col, Row } from "../../../../ui/src";
import { LimitOrderForm } from "../../components/LimitOrderForm";
import { OrderTabs } from "../../components/OrderTabs";
import { PairSelect } from "../../components/PairSelect";

import * as Styled from "./MarketPage.styled";

const MarketPage: NextPage = () => {
  return (
    <>
      <Styled.Container>
        <Row>
          <Col span={7}>
            <Styled.ColumnFlex>
              <PairSelect />
              <OrderTabs />
            </Styled.ColumnFlex>
          </Col>
          <Col span={17}>
            <Row>
              <Col span={12}>
                <LimitOrderForm isBuyOrder={true} />
              </Col>
              <Col span={12}>
                <LimitOrderForm isBuyOrder={false} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Styled.Container>
    </>
  );
};

export default MarketPage;