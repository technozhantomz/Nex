import {
  BlockchainDownloadLinks,
  BlockchainHeaderBar,
  BlockchainTable,
  BlockchainTableActiveIcon,
  BlockchainTableUrlIcon,
  Col as col,
  Row as row,
  styled,
  Button as UiButton,
  List as UiList,
  PrintTable as UiPrintTable,
} from "../../../../../ui/src";
import { breakpoint } from "../../../../../ui/src/breakpoints";
import { colors } from "../../../../../ui/src/colors";
import { Check as check, Xmark as xmark } from "../../../../../ui/src/icons";
import { mixIns } from "../../../../../ui/src/mixins";

export const VoteTableWrapper = styled.div``;

export const VoteTable = styled(BlockchainTable)`
  margin: 0 35px;
  max-width: 100%;
`;

export const VoteList = styled(UiList)`
  padding: 0 25px 25px;
  ${mixIns.hairline}
  &.ant-list-split.ant-list-something-after-last-item .ant-spin-container > .ant-list-items > .ant-list-item:last-child {
    border-bottom: none;
  }
  .ant-list-pagination {
    margin-top: 0;
  }
  .ant-pagination-item {
    border: none;
  }
  .ant-pagination.mini .ant-pagination-item,
  .ant-pagination-item-active {
    border-right: 2px solid ${colors.borderColorBase};
  }
`;

export const VoteListItem = styled(UiList.Item)`
  padding: 27px 0 0;
  &.ant-list-item,
  &.ant-list-item:last-child {
    border-bottom: none;
  }
`;

export const VoteItemContent = styled.div`
  padding: 0;
  margin: 0;
  .vote-info {
    margin: 5px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .vote-info-title {
      font-weight: 300;
      color: ${colors.textColorSecondary};
      width: 80px;
      min-width: 80px;
      margin-right: 10px;
    }
    .vote-info-value {
      font-weight: 500;
    }
  }
`;

export const VoteActionButton = styled(UiButton)`
  margin: 0px;
  border: none;
  background: none;
  boxshadow: none;
  padding: 0;
  color: ${colors.additionalBlue};
  text-align: right;
  vertical-align: middle;
  &:hover {
    background: #fafafa;
  }
`;

export const Container = styled.div`
  margin-bottom: 25px;
`;

export const Title = styled.h3`
  padding: 0 25px;
  ${breakpoint.sm} {
    margin-bottom: 25px;
    padding: 0 35px;
  }
`;

export const ColHeader = styled(col)`
  width: 25%;
  font-size: 12px;
  color: ${colors.textColorSecondary};
  margin-bottom: 10px;
`;

export const Col = styled(col)`
  width: 25%;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Row = styled(row)`
  width: 100%;
`;

export const RowMessage = styled(row)`
  width: 100%;
  font-size: 20px;
  justify-content: center;
`;

/** ICONS */
export const Check = styled(check)`
  color: #11b881;
  margin-left: 15px;
`;

export const Xmark = styled(xmark)`
  color: #d01721;
  margin-left: 15px;
`;

export const VoteHeaderBar = styled(BlockchainHeaderBar)``;
export const DownloadLinks = styled(BlockchainDownloadLinks)``;
export const PrintTable = styled(UiPrintTable)``;
export const urlIcon = styled(BlockchainTableUrlIcon)``;
export const ActiveIcon = styled(BlockchainTableActiveIcon)``;

export const ApprovedStatus = styled.span`
  color: ${colors.successColor};
`;

export const NotApprovedStatus = styled.span`
  color: ${colors.missedColor};
`;
