import { Settings } from "../../common/types";

import { defaultQuote } from "./networkparams";

export const defaultSettings: Settings = {
  language: "en",
  darkTheme: false,
  advancedMode: true,
  nodeAutoselect: true,
  defaultAsset: defaultQuote as string,
  notifications: {
    allow: true,
    additional: {
      transferToMe: true,
    },
  },
  walletLock: 0,
};
