import { StatsCard } from "../StatsCard";

import * as Styled from "./BlockchainTab.styled";
import { BlockTable } from "./components";
import { useBlockchainTab } from "./hooks";

export const BlockchainTab = (): JSX.Element => {
  const { loading, blockchainData, searchValue, searchResult, onSearch } =
    useBlockchainTab();

  return (
    <Styled.BlockTabWrapper>
      <Styled.StatsCardsWrapper>
        <StatsCard
          noData={blockchainData.currentBlock === 0}
          title="Current Block"
          data={`${blockchainData.currentBlock}`}
          statsData={blockchainData.stats.blocks}
        />
        <StatsCard
          noData={blockchainData.supply.amount === 0}
          title={`Supply (${blockchainData.supply.symbol})`}
          data={`${blockchainData.supply.amount}`}
          statsData={blockchainData.stats.supply}
        />
        <StatsCard
          noData={blockchainData.activeWitnesses.length === 0}
          title="Active Witness"
          data={`${blockchainData.activeWitnesses.length}`}
          statsData={blockchainData.stats.witnesses}
        />
        <StatsCard
          isTimeCard
          noData={blockchainData.avgTime === 0}
          title="Confimation Time"
          data={`${blockchainData.avgTime}`}
          statsData={blockchainData.stats.times}
        />
      </Styled.StatsCardsWrapper>
      <Styled.BlockSearch
        size="large"
        placeholder="Search Blocks"
        onSearch={onSearch}
        loading={loading}
      />
      <div>
        <h3>Recent Blocks</h3>
      </div>
      <BlockTable
        searchValue={searchValue}
        blocks={searchResult ? searchResult : blockchainData.recentBlocks}
        loading={loading}
      />
    </Styled.BlockTabWrapper>
  );
};
