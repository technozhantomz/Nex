import {
  CardFormButton as button,
  Form as form,
  Input as input,
  styled,
  Text as text,
} from "../../../../ui/src";

export const WitnessTabCard = styled.div`
  .ant-form-horizontal {
    color: var(---text-icons);
    text-align: left;
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #212121;
    opacity: 1;
    height: 856px;
    margin-left: 30px;
    @media (max-width: 500px) {
      margin: 5px;
      text-align: center;
    }
  }
`;

export const Text = styled(text)``;