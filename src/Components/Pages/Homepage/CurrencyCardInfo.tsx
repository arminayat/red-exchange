import { Row } from "antd";
import { CURRENCIES_SYMBOLS } from "../../../Constants/currencies";
import { CurrenciesTypes } from "../../../Models";
import { P1 } from "../../Typography";

type CurrencyCardInfoTypes = {
  conversion: CurrenciesTypes[];
  conversionRate: number;
  balances: number[];
  error: boolean;
  type: "sell" | "buy";
};
const CurrencyCardInfo = ({
  error,
  balances,
  conversion,
  conversionRate,
  type,
}: CurrencyCardInfoTypes) =>
  type === "sell" ? (
    <Row justify="space-between" style={{ paddingTop: "1rem" }}>
      <P1 fontWeight={400} style={{ opacity: 0.3, paddingLeft: "3.5rem" }}>
        {`${conversionRate.toFixed(4)}${
          CURRENCIES_SYMBOLS[conversion[1]]
        } = ${1}${CURRENCIES_SYMBOLS[conversion[0]]}`}
      </P1>
      {error && <P1 color="var(--primary)">Exceeds Balance</P1>}
      <P1
        fontWeight={400}
        style={{ opacity: 0.3, paddingRight: "3.5rem" }}
      >{`Balance: ${balances[0].toFixed(2)}${CURRENCIES_SYMBOLS[conversion[0]]}`}</P1>
    </Row>
  ) : (
    <Row justify="space-between" style={{ paddingBottom: "1rem" }}>
      <P1 fontWeight={400} style={{ opacity: 0.3, paddingLeft: "3.5rem" }}>
        {`${(1 / conversionRate).toFixed(4)}${
          CURRENCIES_SYMBOLS[conversion[0]]
        } = ${1}${CURRENCIES_SYMBOLS[conversion[1]]}`}
      </P1>
      <P1
        fontWeight={400}
        style={{ opacity: 0.3, paddingRight: "3.5rem" }}
      >{`Balance: ${balances[1].toFixed(2)}${CURRENCIES_SYMBOLS[conversion[1]]}`}</P1>
    </Row>
  );
export default CurrencyCardInfo;
