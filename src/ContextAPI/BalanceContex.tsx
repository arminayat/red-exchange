import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { Dispatch } from "react";
import { ConversionTypes, CurrenciesTypes } from "../Models";

type BalanceType = { [Currency in CurrenciesTypes]: number };
type BalanceActionType = {
  type: ConversionTypes;
  payload: { sellAmount: number; buyAmount: number };
};

const balanceReducer = (state: BalanceType, action: BalanceActionType) => {
  switch (action.type) {
    case "USD_TO_EUR":
      return {
        ...state,
        USD: state.USD - action.payload.sellAmount,
        EUR: state.EUR + action.payload.buyAmount,
      };
    case "USD_TO_GBP":
      return {
        ...state,
        USD: state.USD - action.payload.sellAmount,
        GBP: state.GBP + action.payload.buyAmount,
      };
    case "EUR_TO_USD":
      return {
        ...state,
        EUR: state.EUR - action.payload.sellAmount,
        USD: state.USD + action.payload.buyAmount,
      };
    case "EUR_TO_GBP":
      return {
        ...state,
        EUR: state.EUR - action.payload.sellAmount,
        GBP: state.GBP + action.payload.buyAmount,
      };
    case "GBP_TO_USD":
      return {
        ...state,
        GBP: state.GBP - action.payload.sellAmount,
        USD: state.USD + action.payload.buyAmount,
      };
    case "GBP_TO_EUR":
      return {
        ...state,
        GBP: state.GBP - action.payload.sellAmount,
        EUR: state.EUR + action.payload.buyAmount,
      };
    default:
      throw new Error();
  }
};

const initialBalance = {
  USD: 200,
  EUR: 150,
  GBP: 10,
};

export const BalanceContext = createContext<
  { state: BalanceType; dispatch: Dispatch<BalanceActionType> } | undefined
>(undefined);

const init = (initialValue: BalanceType) => {
  if (localStorage.getItem("balances") !== null) {
    return JSON.parse(localStorage.getItem("balances") || "");
  } else {
    localStorage.setItem("balances", JSON.stringify(initialValue));
    return initialValue;
  }
};

export const BalanceContextProvider = ({
  children,
}: {
  children: React.ReactChild[] | React.ReactChild;
}) => {
  const [state, dispatch] = useReducer(balanceReducer, initialBalance, init);

  useEffect(() => {
    localStorage.setItem("balances", JSON.stringify(state));
  }, [state]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <BalanceContext.Provider value={contextValue}>
      {children}
    </BalanceContext.Provider>
  );
};
