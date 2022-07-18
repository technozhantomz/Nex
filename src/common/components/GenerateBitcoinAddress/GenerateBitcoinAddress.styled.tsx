import { FormDisclamer as UiFormDisclamer } from "..";
import { CardFormButton, Form, styled } from "../../../ui/src";
import { breakpoint } from "../../../ui/src/breakpoints";
import { colors } from "../../../ui/src/colors";

export const DepositForm = styled(Form)``;

export const SonError = styled.span`
  color: ${colors.errorColor};
`;

export const FormItem = styled(Form.Item)`
  width: 255px;
  margin-left: auto;
  margin-right: auto;
  height: 35px;
  margin-bottom: 0;
  ${breakpoint.sm} {
    width: 399px;
    height: 44px;
  }
`;

export const Button = styled(CardFormButton)`
  width: 100%;
`;

export const FormDisclamer = styled(UiFormDisclamer)`
  margin-top: 25px;
  ${breakpoint.sm} {
    margin-top: 35px;
  }
`;
