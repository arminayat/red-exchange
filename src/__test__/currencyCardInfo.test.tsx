import { render } from "@testing-library/react";
import CurrencyCardInfo from "../Components/Pages/Homepage/CurrencyCardInfo";
import CURRENCIES from "../Constants/currencies";

const conversionRate = 3.23;
const initiaBalances = [100, 200];

test("displays balance correctly", async () => {
  const component = render(
    <CurrencyCardInfo
      error={true}
      balances={initiaBalances}
      conversion={[CURRENCIES.USD, CURRENCIES.EUR]}
      conversionRate={conversionRate}
      type={"sell"}
    />
  );

  const sellBalanceTxt = await component.findByTestId("balance-sell");
  expect(sellBalanceTxt.innerHTML).toMatch(
    `Balance: ${initiaBalances[0].toFixed(2)}$`
  );
});

test("displays conversion rate correctly", async () => {
  const component = render(
    <CurrencyCardInfo
      error={true}
      balances={initiaBalances}
      conversion={[CURRENCIES.USD, CURRENCIES.EUR]}
      conversionRate={conversionRate}
      type={"sell"}
    />
  );

  const convRateTxt = await component.findByTestId("conversion-rate-sell");
  expect(convRateTxt.innerHTML).toMatch(`${conversionRate.toFixed(4)}€ = 1$`);
});

test("displays error correctly", async () => {
  const component = render(
    <CurrencyCardInfo
      error={true}
      balances={initiaBalances}
      conversion={[CURRENCIES.USD, CURRENCIES.EUR]}
      conversionRate={conversionRate}
      type={"sell"}
    />
  );

  const errorTxt = await component.findByTestId("error");
  expect(errorTxt.innerHTML).toMatch(`Exceeds Balance`);
});
