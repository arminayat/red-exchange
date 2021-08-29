import { useQuery, UseQueryOptions } from "react-query";
import { queryKeys } from "./queryKeys";
import API from "../API";
import { CurrenciesTypes } from "../../Models";
import { useGetPairRateOutputType } from "../../Models/api";

type getPairRateInputType = { from: CurrenciesTypes; to: CurrenciesTypes };
const fetchExchangeRate = async ({ from, to }: getPairRateInputType) => {
  const { data } = await API.get(`/pair/${from}/${to}`);
  return data;
};


export const exchangeRate = {
  useGetPairRate: (
    { from, to }: getPairRateInputType,
    options?: UseQueryOptions<unknown, unknown, useGetPairRateOutputType>
  ) =>
    useQuery<unknown, unknown, useGetPairRateOutputType>(
      [queryKeys.exchangeRate, from, to],
      () => fetchExchangeRate({ from, to }),
      options
    ),
};
