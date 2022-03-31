import { Divider } from "antd";
import React from "react";

import {
  ActionForm,
  DataTable,
} from "../../../../common/components/VotingPageTabsUI";

import * as Styled from "./WitnessTab.styled";
import { useWitnessTab } from "./hooks";

export const WitnessTab = (): JSX.Element => {
  const { loading, witnesses, searchValue, onSearch } = useWitnessTab();
  console.log(witnesses.data);
  return (
    <Styled.WitnessTabCard>
      <ActionForm />
      <DataTable approved={true} />
      <Divider />
      <DataTable approved={false} />
    </Styled.WitnessTabCard>
  );
};
