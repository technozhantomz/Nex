import { CardFormButton, styled } from "../../../../ui/src";
import { colors } from "../../../../ui/src/colors";

export const Button = styled(CardFormButton)``;

export const WithdrawContainer = styled.div`
  background: ${colors.white} 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: ${colors.textColor};
  font-size: 20px;
  width: 600px;
  margin: 10px;
  padding: 30px 10px 10px;
  .label {
    font: normal normal normal 14px/17px Inter;
    letter-spacing: 0px;
    color: #6c6c6c;
    opacity: 1;
    margin-top: 30px;
  }
  .ant-form {
    width: 90%;
    margin: 0 auto;
    .ant-input {
      height: 62px;
    }
  }
`;