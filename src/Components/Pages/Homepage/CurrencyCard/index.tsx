import { Col } from "antd";
import { CurrenciesTypes } from "../../../../Models";
import Select from "../../../Select";
import { H6 } from "../../../Typography";
import { CardBox, CurrencyContainer, CurrencyInput } from "./components";

type CurrencyCardProp = {
  currency: CurrenciesTypes;
  amount: number;
  onCurrencyChange: (currency: CurrenciesTypes) => void;
  onAmountChange: (amount: number) => void;
  type: "sell" | "buy";
  error: boolean;
};

const CurrencyCard = ({
  currency,
  amount,
  onCurrencyChange,
  onAmountChange,
  type,
  error,
}: CurrencyCardProp) => {
  return (
    <CardBox justify="space-between" error={error}>
      <CurrencyContainer align="middle" justify="space-between">
        <Col md={24} xs={undefined}>
          <H6>{type === "sell" ? "Sell:" : "Buy:"}</H6>
        </Col>
        <Col md={24} xs={undefined}>
          <Select
            value={currency}
            onSelect={(selectedCurr) =>
              onCurrencyChange(selectedCurr as CurrenciesTypes)
            }
            data-testid={`select-currency-${type}`}
          >
            <Select.Option value="USD">$USD</Select.Option>
            <Select.Option value="EUR">€EUR</Select.Option>
            <Select.Option value="GBP">£GBP</Select.Option>
          </Select>
        </Col>
      </CurrencyContainer>
      <CurrencyInput
        value={!!amount ? amount : undefined}
        onChange={(e) =>
          !!e.target.value
            ? onAmountChange(parseFloat(e.target.value))
            : onAmountChange(0)
        }
        type="number"
        suffix={type === "sell" ? "-" : "+"}
        placeholder="0"
        data-testid={`amount-input-${type}`}
      />
    </CardBox>
  );
};
export default CurrencyCard;
