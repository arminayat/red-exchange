import { BalanceActionType, BalanceType } from ".";

export const balanceReducer = (
  state: BalanceType,
  action: BalanceActionType
) => {
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

export const init = (initialValue: BalanceType) => {
  if (localStorage.getItem("balances") !== null) {
    return JSON.parse(localStorage.getItem("balances") || "");
  } else {
    localStorage.setItem("balances", JSON.stringify(initialValue));
    return initialValue;
  }
};

export const initialBalance = {
  USD: 200,
  EUR: 150,
  GBP: 10,
};
