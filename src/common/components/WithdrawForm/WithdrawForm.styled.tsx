import { CardFormButton, CardFrom, Form, styled } from "../../../ui/src";
import { breakpoint } from "../../../ui/src/breakpoints";

export const WithdrawForm = styled(CardFrom)`
  margin: 0 20px;
`;

export const WithdrawFormAssetAmount = styled(CardFrom.Item)`
  .ant-input-affix-wrapper {
    padding: 0;
    .ant-input-prefix {
      min-width: 135px;
      width: 33%;
    }
    .ant-input {
      text-align: right;
      padding-right: 30px;
    }
  }
`;
export const WithdrawFormAsset = styled(CardFrom.Item)`
   {
    width: 100%;
    margin-bottom: 0;
    &.ant-form-item-has-error
      .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)
      .ant-select-selector {
      border-color: none !important;
    }
  }
`;

export const WithdrawFormButton = styled(CardFormButton)`
  width: 100%;
`;

export const FormItem = styled(Form.Item)`
  width: 255px;
  margin-left: auto;
  margin-right: auto;
  height: 35px;
  ${breakpoint.sm} {
    width: 399px;
    height: 44px;
  }
`;
