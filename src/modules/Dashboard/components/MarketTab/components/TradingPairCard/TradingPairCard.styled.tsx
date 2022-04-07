import { styled } from "../../../../../../ui/src";
import { breakpoint } from "../../../../../../ui/src/breakpoints";

export const Card = styled.div`
  height: 65px;
  ${breakpoint.sm} {
    height: 100px;
  }
  /* UI Properties */
  background: var(---text-icons-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #c1c2c4;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background: transparent
      linear-gradient(
        180deg,
        ${(props) =>
          props.theme
            ? props.theme.backgroundColorCode
            : props.theme.backgroundColorCode},
        var(---text-icons-ffffff) 100%
      )
      0% 0% no-repeat padding-box;
    border: 1px solid var(---primary-blue);
    background: transparent
      linear-gradient(
        180deg,
        ${(props) =>
          props.theme
            ? props.theme.backgroundColorCode
            : props.theme.backgroundColorCode},
        #ffffff 100%
      )
      0% 0% no-repeat padding-box;
    border: 1px solid #0a48be;
    border-radius: 4px;
    opacity: 1;
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    height: 25px;
  }
`;
export const TradingPair = styled.p`
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #6c6c6c;
  opacity: 1;
  font-size: 10px;
  ${breakpoint.sm} {
    font-size: 14px;
  }
  margin: 10px;
`;
export const PercentChange = styled.p`
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: ${(props) =>
    props.theme
      ? props.theme.percentChangeColor
      : props.theme.percentChangeColor};
  opacity: 1;
  font-size: 14px;
  margin: 10px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
export const Price = styled.p`
  color: var(---text-icons);
  text-align: left;
  font: normal normal medium 28px/34px Inter;
  letter-spacing: 0px;
  color: #212121;
  opacity: 1;
  font-size: 26px;
  margin-left: 10px;
  display: ${(props) =>
    props.theme ? props.theme.display : props.theme.display};
  ${breakpoint.sm} {
    font-size: 28px;
  }
`;
export const Volume = styled.p`
  color: var(---text-icons);
  text-align: left;
  font: normal normal medium 28px/34px Inter;
  letter-spacing: 0px;
  color: #212121;
  opacity: 1;
  font-size: 26px;
  margin-left: 10px;
  ${breakpoint.sm} {
    font-size: 28px;
  }
`;
