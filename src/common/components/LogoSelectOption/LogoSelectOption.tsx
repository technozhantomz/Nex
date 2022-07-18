import React from "react";

import { BaseOptionType, DefaultOptionType } from "../../../ui/src";
import BitcoinCashIcon from "../../../ui/src/icons/Cryptocurrencies/BitcoinCashIcon.svg";
import BitcoinIcon from "../../../ui/src/icons/Cryptocurrencies/BitcoinIcon.svg";
import BitsharesIcon from "../../../ui/src/icons/Cryptocurrencies/BitsharesIcon.svg";
import DefaultIcon from "../../../ui/src/icons/Cryptocurrencies/DefaultIcon.svg";
import EOSIcon from "../../../ui/src/icons/Cryptocurrencies/EOSIcon.svg";
import EthereumIcon from "../../../ui/src/icons/Cryptocurrencies/EthereumIcon.svg";
import HIVEIcon from "../../../ui/src/icons/Cryptocurrencies/HIVEIcon.svg";
import PPYIcon from "../../../ui/src/icons/Cryptocurrencies/PPYIcon.svg";
import TetherIcon from "../../../ui/src/icons/Cryptocurrencies/TetherIcon.svg";
import USDIcon from "../../../ui/src/icons/Cryptocurrencies/USDIcon.svg";
import { Asset } from "../../types";

import * as Styled from "./LogoSelectOption.styled";

type LogoSelectionProps = {
  id?: string;
  onChange?:
    | ((
        value: unknown,
        option:
          | DefaultOptionType
          | BaseOptionType
          | undefined
          | (DefaultOptionType | BaseOptionType)[]
      ) => void)
    | undefined;
  assets: Asset[];
  className?: string;
  value: string;
};

export const LogoSelectOption = (props: LogoSelectionProps): JSX.Element => {
  const icons: {
    [symbol: string]: JSX.Element;
  } = {
    PEOS: <EOSIcon height="30" width="30" />,
    EOS: <EOSIcon height="30" width="30" />,
    PBTC: <BitcoinIcon height="30" width="30" />,
    BTC: <BitcoinIcon height="30" width="30" />,
    TEST: <PPYIcon height="30" width="30" />,
    PPY: <PPYIcon height="30" width="30" />,
    HIVE: <HIVEIcon height="30" width="30" />,
    HBD: <HIVEIcon height="30" width="30" />,
    PETH: <EthereumIcon height="30" width="30" />,
    ETH: <EthereumIcon height="30" width="30" />,
    BTS: <BitsharesIcon height="30" width="30" />,
    USDT: <TetherIcon height="30" width="30" />,
    Default: <DefaultIcon height="30" width="30" />,
    USD: <USDIcon height="30" width="30" />,
    BCH: <BitcoinCashIcon height="30" width="30" />,
  };

  return (
    <Styled.SelectContainer
      onChange={props.onChange}
      bordered={false}
      className={props.className}
      value={props.value}
    >
      {props.assets &&
        props.assets.map((asset) => (
          <Styled.SelectOptionContainer
            action={props.id}
            key={asset.symbol}
            value={asset.symbol}
            label={asset.symbol}
          >
            <Styled.OptionDiv>
              <Styled.IconContainer>
                {icons[asset.symbol] !== undefined
                  ? icons[asset.symbol]
                  : icons["Default"]}
              </Styled.IconContainer>
              <Styled.AssetName>{asset.symbol}</Styled.AssetName>
            </Styled.OptionDiv>
          </Styled.SelectOptionContainer>
        ))}
    </Styled.SelectContainer>
  );
};
