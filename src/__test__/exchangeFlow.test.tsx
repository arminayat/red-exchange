import { fireEvent, render } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import App from "../App";
import { BalanceContextProvider } from "../ContextAPI/BalanceContext";
import queryClient from "../RESTservice/queryClient";
import nock from "nock";
import { API_URL } from "../RESTservice/API";

test("displays error when input exceeds balance", async () => {
  const component = render(
    <BalanceContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BalanceContextProvider>
  );

  const sellAmountInput = await component.findByTestId("amount-input-sell");
  fireEvent.change(sellAmountInput, { target: { value: 300 } });

  const errorTxt = await component.findByTestId("error");
  expect(errorTxt.innerHTML).toBe(`Exceeds Balance`);
});

test("currencies swap", async () => {
  const component = render(
    <BalanceContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BalanceContextProvider>
  );

  const sellSelectCurrency = await component.findByTestId(
    "select-currency-sell"
  );
  const buySelectCurrency = await component.findByTestId("select-currency-buy");

  expect(sellSelectCurrency.textContent).toBe("$USD");
  expect(buySelectCurrency.textContent).toBe("€EUR");

  const swapButton = await component.findByTestId("swap-button");

  fireEvent.click(swapButton);

  expect(sellSelectCurrency.textContent).toBe("€EUR");
  expect(buySelectCurrency.textContent).toBe("$USD");
});

test("exchange flow: change 15 USD to EUR", async () => {
  const sellAmount = 15;

  const conversionRate = 1;
  const mockedApiResponse = {
    result: "success",
    conversion_rate: conversionRate,
  };
  nock(API_URL).get("/pair/USD/EUR").reply(200, {
    mockedApiResponse,
  });

  const component = render(
    <BalanceContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BalanceContextProvider>
  );

  const sellAmountInput = await component.findByTestId("amount-input-sell");
  const exchangeButton = await component.findByRole("button", {
    name: /exchange/i,
  });
  component.debug();
  fireEvent.change(sellAmountInput, { target: { value: sellAmount } });
  fireEvent.click(exchangeButton);

  const balanceSell = await component.findByTestId("balance-sell");
  const balanceBuy = await component.findByTestId("balance-buy");
  expect(balanceSell.innerHTML).toBe(
    `Balance: ${(200 - sellAmount).toFixed(2)}$`
  );
  expect(balanceBuy.innerHTML).toBe(
    `Balance: ${(150 + sellAmount * conversionRate).toFixed(2)}€`
  );
});
