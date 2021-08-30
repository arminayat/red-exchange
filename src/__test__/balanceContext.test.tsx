import { renderHook } from "@testing-library/react-hooks";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";
import {
  balanceReducer,
  init,
  initialBalance,
} from "../ContextAPI/BalanceContext/reducer";

test("initialize correctly", async () => {
  const { result } = renderHook(() =>
    useReducer(balanceReducer, initialBalance, init)
  );
  const [state, dispatch] = result.current;

  expect(state.USD).toBe(200);
  expect(state.EUR).toBe(150);
  expect(state.GBP).toBe(10);
});

test("update balances correctly", async () => {
  const { result } = renderHook(() =>
    useReducer(balanceReducer, initialBalance, init)
  );
  const [state, dispatch] = result.current;

  expect(state.USD).toBe(200);
  expect(state.EUR).toBe(150);

  const conversionRate = 2;
  const sellAmount = 10;

  await act(async () =>
    dispatch({
      type: "USD_TO_EUR",
      payload: { sellAmount, buyAmount: sellAmount * conversionRate },
    })
  );

  const [newState] = result.current;

  expect(newState.USD).toBe(200 - sellAmount);
  expect(newState.EUR).toBe(150 + sellAmount * conversionRate);
});
