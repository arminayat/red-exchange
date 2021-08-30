import { message } from "antd";
import { useContext } from "react";
import { BalanceContext } from "../ContextAPI/BalanceContext";
import { useState } from "react";
import CURRENCIES from "../Constants/currencies";
import { ConversionTypes, CurrenciesTypes } from "../Models";
import { queryHooks } from "../RESTservice/QueryHooks";
import currencyToConversion from "../Components/Helpers/currencyToConversion";
import HomepageLayout from "../Components/Pages/Homepage/Layout";

const Homepage = () => {
  const balanceCtx = useContext(BalanceContext);

  const [conversion, setConversion] = useState<CurrenciesTypes[]>([
    CURRENCIES.USD,
    CURRENCIES.EUR,
  ]);
  const [amounts, setAmounts] = useState<(number | undefined)[]>([
    undefined,
    undefined,
  ]);
  const [lastChanged, setLastChanged] = useState<"sell" | "buy">("sell");

  const { data: exchangeRate, refetch } =
    queryHooks.exchangeRate.useGetPairRate(
      {
        from: conversion[0],
        to: conversion[1],
      },
      {
        refetchInterval: 60 * 1000,
        onSuccess: (data) =>
          lastChanged === "sell"
            ? handleChangeSellingAmount(amounts[0], data.conversion_rate)
            : handleChangeBuyingAmount(amounts[1], data.conversion_rate),
      }
    );

  const handleChangeSellingCurrency = (selectedCurr: CurrenciesTypes) => {
    setConversion((state) => [selectedCurr, state[1]]);
    setLastChanged("sell");
  };
  const handleChangeSellingAmount = (
    amount: number | undefined,
    rate?: number
  ) => {
    amount && amount >= 0
      ? setAmounts([
          amount,
          amount * (rate || exchangeRate?.conversion_rate || 1),
        ])
      : setAmounts([undefined, undefined]);
    setLastChanged("sell");
  };

  const handleChangeBuyingCurrency = (selectedCurr: CurrenciesTypes) => {
    setConversion((state) => [state[0], selectedCurr]);
    handleChangeSellingAmount(amounts[0]);
    setLastChanged("buy");
  };
  const handleChangeBuyingAmount = (
    amount: number | undefined,
    rate?: number
  ) => {
    amount && amount >= 0
      ? setAmounts([
          amount / (rate || exchangeRate?.conversion_rate || 1),
          amount,
        ])
      : setAmounts([undefined, undefined]);
    setLastChanged("buy");
  };

  const handleSwapCurrencies = () => {
    setConversion((state) => [state[1], state[0]]);
    setAmounts((state) => [state[1], state[0]]);
    refetch();
  };

  const handleExchange = () => {
    balanceCtx?.dispatch({
      type: currencyToConversion(
        conversion[0],
        conversion[1]
      ) as ConversionTypes,
      payload: {
        sellAmount: amounts[0] as number,
        buyAmount: amounts[1] as number,
      },
    });
    setAmounts([0, 0]);
    message.success("Exchange was successful");
  };

  return (
    <HomepageLayout
      amounts={amounts}
      balances={[
        balanceCtx?.state[conversion[0]] || 0,
        balanceCtx?.state[conversion[1]] || 0,
      ]}
      conversion={conversion}
      conversionRate={exchangeRate?.conversion_rate || 1}
      error={(amounts[0] || 0) > (balanceCtx?.state[conversion[0]] || 0)}
      handleChangeSellingAmount={handleChangeSellingAmount}
      handleChangeSellingCurrency={handleChangeSellingCurrency}
      handleChangeBuyingAmount={handleChangeBuyingAmount}
      handleChangeBuyingCurrency={handleChangeBuyingCurrency}
      handleSwapCurrencies={handleSwapCurrencies}
      handleExchange={handleExchange}
    />
  );
};
export default Homepage;
