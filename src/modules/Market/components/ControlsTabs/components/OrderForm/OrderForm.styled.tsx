import {
  Collapse,
  Radio,
  styled,
  //CardFormButton as UiButton,
  Form as UiForm,
  Input as UiInput,
  Slider as UiSlider,
  WalletOutlined,
} from "../../../../../../ui/src";
import { breakpoint } from "../../../../../../ui/src/breakpoints";
import { colors } from "../../../../../../ui/src/colors";
import { mixIns } from "../../../../../../ui/src/mixins";

export const FormContainer = styled.div``;
export const Form = styled(UiForm)``;
export const FormItem = styled(UiForm.Item)`
  margin-bottom: 0;
`;
export const AmountFormItem = styled(FormItem)`
  margin-bottom: 15px;
`;
export const InputNumber = styled(UiInput)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  height: 50px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 16px 20px;
  ${mixIns.borderRadius}
  .ant-input-suffix {
    font-size: 18px;
  }
`;
export const PriceSlider = styled(UiSlider)`
  margin-bottom: 25px;
  &.ant-slider:hover .ant-slider-track {
    background-color: ${colors.lightText};
  }
  &.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: ${colors.textColor};
  }
  .ant-slider-rail {
    height: 8px;
  }
  .ant-slider-mark {
    display: none;
  }
  .ant-slider-handle {
    width: 22px;
    height: 22px;
    border: solid 4px ${colors.textColor};
    margin-top: -8px;
  }
  .ant-slider-handle:focus {
    box-shadow: unset;
  }
  .ant-slider-track {
    background-color: ${colors.lightText};
    height: 8px;
  }

  .ant-slider-dot {
    top: -6px;
    width: 20px;
    height: 20px;
    background-color: ${colors.lightText};
  }
  .ant-slider-dot-active {
    border: unset;
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;
export const WalletIcon = styled(WalletOutlined)`
  color: ${colors.lightText};
  margin-right: 20px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
export const BalanceValue = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.textColor};
`;

export const PriceRadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;
  height: 50px;
  margin-bottom: 8px;
  .ant-radio-button-wrapper:first-child {
    border-radius: 4px 0 0 4px;
  }
  .ant-radio-button-wrapper:last-child {
    border-radius: 0 4px 4px 0;
  }
  .ant-radio-button-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    ${breakpoint.xxl} {
      padding: 0 6px;
    }
  }
  .ant-radio-button-wrapper > .ant-radio-button + span {
  }
`;
export const PriceRadioButton = styled(Radio.Button)`
  flex: 1 1 20%;
`;

export const AdvancedCollapse = styled(Collapse)`
  &.ant-collapse-borderless {
    background-color: ${colors.white};
  }
  &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    flex-direction: row-reverse;
    padding: 0;
    padding-bottom: 20px;
    .ant-collapse-header-text {
      font-size: 16px;
      font-weight: 500;
    }
    .ant-collapse-arrow {
      margin-right: 0px;
      font-size: 16px;
    }
  }
  &.ant-collapse-borderless
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding: 0;
  }
`;
export const AdvancedCollapsePanel = styled(Collapse.Panel)``;
export const TimePolicyHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  .anticon-info-circle {
    color: rgb(242, 194, 34);
    font-size: 18px;
  }
  margin-bottom: 20px;
`;
export const TimePolicyHeader = styled.h4`
  font-size: 14px;
  margin-right: 20px;
  margin-bottom: 0;
`;
