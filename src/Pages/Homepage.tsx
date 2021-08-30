import { message } from "antd";
import { useContext } from "react";
import { BalanceContext } from "../ContextAPI/BalanceContext";
import { useState } from "react";
import CURRENCIES from "../Constants/currencies";
import { ConversionTypes, CurrenciesTypes } from "../Models";
import { queryHooks } from "../RESTservice/QueryHooks";
import currencyToConversion from "../Components/Helpers/currencyToConversion";
import HomepageLayout from "../Components/Pages/Homepage/Layout/Layout";

const Homepage = () => {
  const balanceCtx = useContext(BalanceContext);

  const [conversion, setConversion] = useState<CurrenciesTypes[]>([
    CURRENCIES.USD,
    CURRENCIES.EUR,
  ]);
  const [amounts, setAmounts] = useState<number[]>([0, 0]);

  const { data: exchangeRate, refetch } =
    queryHooks.exchangeRate.useGetPairRate({
      from: conversion[0],
      to: conversion[1],
    });

  const handleChangeBuyingCurrency = (selectedCurr: CurrenciesTypes) =>
    setConversion((state) => [selectedCurr, state[1]]);
  const handleChangeBuyingAmount = (amount: number) =>
    amount >= 0 &&
    setAmounts([amount, amount * (exchangeRate?.conversion_rate || 1)]);

  const handleChangeSellingCurrency = (selectedCurr: CurrenciesTypes) =>
    setConversion((state) => [state[0], selectedCurr]);
  const handleChangeSellingAmount = (amount: number) =>
    amount >= 0 &&
    setAmounts([amount / (exchangeRate?.conversion_rate || 1), amount]);

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
      payload: { sellAmount: amounts[0], buyAmount: amounts[1] },
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
      error={amounts[0] > (balanceCtx?.state[conversion[0]] || 0)}
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
