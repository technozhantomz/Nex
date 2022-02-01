import { useCallback } from "react";

import { usePeerplaysApi } from "../../modules/peerplaysApi";
import { Asset, Cache } from "../types";

import { UseAssetResult } from "./useAsset.types";
import { useLocalStorage } from "./useLocalStorage";
import { roundNum } from "./useRoundNum";

export function useAsset(): UseAssetResult {
  const { dbApi } = usePeerplaysApi();
  const [jsonCache, setJsonCache] = useLocalStorage("cache");

  const getAssetById = useCallback(
    async (id: string) => {
      const cache = jsonCache as Cache;
      if (
        Object.keys(cache).length > 0 &&
        cache.assets != undefined &&
        cache.assets.find((asset) => asset.id === id) !== undefined
      ) {
        return cache.assets.find((asset) => asset.id === id);
      }

      const asset: Asset = await dbApi("get_assets", [[id]]).then(
        (e: Asset[]) => e[0]
      );
      const assets =
        cache.assets != undefined ? [...cache.assets, asset] : [asset];
      setJsonCache(
        JSON.stringify({
          created: cache.created,
          accounts: cache.accounts,
          assets: assets,
          userAccount: cache.userAccount,
        })
      );

      return asset;
    },
    [dbApi, jsonCache, setJsonCache]
  );

  const getAssetBySymbol = useCallback(
    async (symbol: string) => {
      const cache = jsonCache as Cache;
      if (
        Object.keys(cache).length > 0 &&
        cache.assets != undefined &&
        cache.assets.find((asset) => asset.symbol === symbol) !== undefined
      ) {
        return cache.assets.find((asset) => asset.symbol === symbol);
      }

      const asset: Asset = await dbApi("lookup_asset_symbols", [[symbol]]).then(
        (e: Asset[]) => e[0]
      );
      const assets =
        cache.assets != undefined ? [...cache.assets, asset] : [asset];
      setJsonCache(
        JSON.stringify({
          created: cache.created,
          accounts: cache.accounts,
          assets: assets,
          userAccount: cache.userAccount,
        })
      );

      return asset;
    },
    [dbApi, jsonCache, setJsonCache]
  );

  const toString = useCallback(
    (amount: number, symbol: string, precision: number) => {
      return `${setPrecision(true, amount, precision)} ${symbol}`;
    },
    []
  );

  const setPrecision = useCallback(
    (roundTo: boolean, amount: number, precision: number) => {
      const precisioned = amount / 10 ** precision;
      return roundTo ? roundNum(precisioned, precision) : precisioned;
    },
    []
  );
  return {
    getAssetById,
    getAssetBySymbol,
    setPrecision,
    toString,
  };
}