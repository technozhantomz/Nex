import { styled, List as UiList, Table as UiTable } from "../../../../ui/src";
import { breakpoint } from "../../../../ui/src/breakpoints";
import { colors } from "../../../../ui/src/colors";

export const FeesTabWrapper = styled.div`
  margin: 0 15px;
  ${breakpoint.sm} {
    margin: 0 25px;
  }
`;

export const FeesTable = styled(UiTable)`
  .ant-table-thead > tr > th {
    color: ${colors.textColorSecondary};
    background: ${colors.white};
    border: none;
    font-size: 0.9em;
    font-weight: 300;
    &:before {
      display: none;
    }
  }
  .ant-table-tbody > tr > td {
    border: none;
    div:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  .ant-tag {
    padding: 5px 15px;
    background: ${colors.assetTag};
    border: none;
    color: ${colors.textColor};
    text-transform: capitalize;
  }
`;

export const FeeSpecificHeader = styled.h3`
  margin-top: 15px;
  margin-bottom: 15px;
  ${breakpoint.sm} {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const FeeListItem = styled(UiList.Item)``;

export const FeeItemContent = styled.div`
  margin: 18px 0 25px;
  .fee-info {
    margin: 5px 0;
    display: flex;
    .fee-info-title {
      font-weight: 300;
      width: 85px;
      margin-right: 5px;
      color: ${colors.textColorSecondary};
    }
    .fee-info-value {
      font-weight: 500;
      .ant-tag {
        padding: 5px 15px;
        background: ${colors.assetTag};
        border: none;
        color: ${colors.textColor};
        text-transform: capitalize;
      }
    }
  }
`;

export const FeeTypeOrValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  span:not(:last-child) {
    margin-bottom: 5px;
  }
`;