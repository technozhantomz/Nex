import { styled, List as UiList } from "../../../../../ui/src";
import { breakpoint } from "../../../../../ui/src/breakpoints";
import { colors } from "../../../../../ui/src/colors";

export const ActivityListItem = styled(UiList.Item)`
  padding: 25px 25px;
  a {
    font-style: italic;
  }
`;

export const ActivitysItemContent = styled.div`
  .activity-info {
    &:last-child {
      align-items: center;
      margin: 15px 0 0 0;
    }
    margin: 5px 0;
    display: flex;
    .activity-info-title {
      min-width: 28px;
      margin-right: 15px;
      font-weight: 300;
      color: ${colors.textColorSecondary};
    }
    .activity-info-value {
      font-weight: 500;
    }
  }
  ${breakpoint.xs} {
    margin: 18px 0 25px;
  }
`;
