import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { Dispatch } from "react";
import { ConversionTypes, CurrenciesTypes } from "../../Models";
import { balanceReducer, init, initialBalance } from "./reducer";

export type BalanceType = { [Currency in CurrenciesTypes]: number };
export type BalanceActionType = {
  type: ConversionTypes;
  payload: { sellAmount: number; buyAmount: number };
};


export const BalanceContext = createContext<
  { state: BalanceType; dispatch: Dispatch<BalanceActionType> } | undefined
>(undefined);

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
