import { Col, Row } from "antd";
import { AiOutlineSwap } from "react-icons/ai";
import { CurrenciesTypes } from "../../../../Models";
import Button from "../../../Button";
import CurrencyCard from "../CurrencyCard";
import CurrencyCardInfo from "../CurrencyCardInfo";
import { SubmitButton } from "./components";

type HomepageLayoutTypes = {
  conversion: CurrenciesTypes[];
  conversionRate: number;
  amounts: number[];
  balances: number[];
  error: boolean;
  handleChangeBuyingCurrency: (selectedCurr: CurrenciesTypes) => void;
  handleChangeBuyingAmount: (amount: number) => void;
  handleChangeSellingCurrency: (selectedCurr: CurrenciesTypes) => void;
  handleChangeSellingAmount: (amount: number) => void;
  handleSwapCurrencies: () => void;
  handleExchange: () => void;
};
const HomepageLayout = ({
  conversion,
  conversionRate,
  amounts,
  balances,
  error,
  handleChangeBuyingCurrency,
  handleChangeBuyingAmount,
  handleChangeSellingCurrency,
  handleChangeSellingAmount,
  handleSwapCurrencies,
  handleExchange,
}: HomepageLayoutTypes) => {
  return (
    <Row justify="center" style={{ width: "100%" }} gutter={[0, 20]}>
      <Col md={15} xs={24}>
        <CurrencyCard
          currency={conversion[0]}
          amount={amounts[0]}
          type={"sell"}
          error={error}
          onCurrencyChange={handleChangeBuyingCurrency}
          onAmountChange={handleChangeBuyingAmount}
        />
        <CurrencyCardInfo
          balances={balances}
          conversion={conversion}
          conversionRate={conversionRate}
          error={error}
          type={"sell"}
        />
      </Col>
      <Col md={15} xs={24}>
        <Row justify="center">
          <Button color="#000" height="5rem" width="5rem" onClick={handleSwapCurrencies}>
            <AiOutlineSwap />
          </Button>
        </Row>
      </Col>
      <Col md={15} xs={24}>
        <CurrencyCardInfo
          balances={balances}
          conversion={conversion}
          conversionRate={conversionRate}
          error={error}
          type={"buy"}
        />
        <CurrencyCard
          currency={conversion[1]}
          amount={amounts[1]}
          type={"buy"}
          error={false}
          onCurrencyChange={handleChangeSellingCurrency}
          onAmountChange={handleChangeSellingAmount}
        />
      </Col>
      <Col md={15} xs={15}>
        <Row justify="center">
          <SubmitButton onClick={handleExchange} disabled={error}>
            EXCHANGE
          </SubmitButton>
        </Row>
      </Col>
    </Row>
  );
};
export default HomepageLayout;
