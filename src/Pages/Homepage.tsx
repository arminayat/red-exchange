import { Col, Row } from "antd";
import CurrencyCard from "../Components/Pages/Homepage/CurrencyCard";
import { P1 } from "../Components/Typography";
import { AiOutlineSwap } from "react-icons/ai";
import styled from "styled-components";
import { useContext } from "react";
import { BalanceContext } from "../ContextAPI/BalanceContex";
import { useState } from "react";
import CURRENCIES, { CURRENCIES_SYMBOLS } from "../Constants/currencies";
import { CurrenciesTypes } from "../Models";

const SwapButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background-color: #fff;
  height: 5rem;
  width: 5rem;
  font-size: 3rem;
  transition: 0.5s box-shadow ease;
  :hover {
    box-shadow: 0px 4px 40px 7px rgba(0, 0, 0, 0.05);
  }
`;
const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2rem;
  font-size: 2.8rem;
  font-weight: 400;
  height: 6rem;
  width: 30rem;
  padding-bottom: 0.2rem;
  color: rgba(217, 4, 41, 0.8);
  background: rgb(255, 255, 255);
  transition: 0.5s box-shadow ease;
  box-shadow: 0px 4px 58px 7px rgba(0, 0, 0, 0.05);
  word-spacing: 4px;

  :hover {
    color: rgba(217, 4, 41, 1);
    box-shadow: 0px 4px 40px 7px rgba(239, 35, 60, 0.15);
  }
`;

const Homepage = () => {
  const balanceCtx = useContext(BalanceContext);

  const [conversion, setConversion] = useState<CurrenciesTypes[]>([
    CURRENCIES.USD,
    CURRENCIES.EUR,
  ]);
  const [amounts, setAmounts] = useState<number[]>([0, 0]);

  const handleChangeBuyingCurrency = (selectedCurr: CurrenciesTypes) =>
    setConversion((state) => [selectedCurr, state[1]]);
  const handleChangeBuyingAmount = (amount: number) =>
    setAmounts((state) => [amount, state[1]]);

  const handleChangeSellingCurrency = (selectedCurr: CurrenciesTypes) =>
    setConversion((state) => [state[0], selectedCurr]);
  const handleChangeSellingAmount = (amount: number) =>
    setAmounts((state) => [state[0], amount]);

  const handleSwapCurrencies = () =>
    setConversion((state) => [state[1], state[0]]);

  return (
    <Row justify="center" style={{ width: "100%" }} gutter={[0, 20]}>
      <Col span={15}>
        <CurrencyCard
          currency={conversion[0]}
          amount={amounts[0]}
          type={"sell"}
          onCurrencyChange={handleChangeBuyingCurrency}
          onAmountChange={handleChangeBuyingAmount}
        />
        <Row justify="space-between" style={{ paddingTop: "1rem" }}>
          <P1
            fontWeight={400}
            style={{ opacity: 0.3, paddingLeft: "3.5rem" }}
          >{`${1} ${"USD"} = ${0.34} ${"EUR"} `}</P1>
          <P1
            fontWeight={400}
            style={{ opacity: 0.3, paddingRight: "3.5rem" }}
          >{`Balance: ${balanceCtx?.state[conversion[0]]}${
            CURRENCIES_SYMBOLS[conversion[0]]
          }`}</P1>
        </Row>
      </Col>
      <Col span={15}>
        <Row justify="center">
          <SwapButton onClick={handleSwapCurrencies}>
            <AiOutlineSwap />
          </SwapButton>
        </Row>
      </Col>
      <Col span={15}>
        <Row justify="space-between" style={{ paddingBottom: "1rem" }}>
          <P1
            fontWeight={400}
            style={{ opacity: 0.3, paddingLeft: "3.5rem" }}
          >{`${1} ${"USD"} = ${0.34} ${"EUR"} `}</P1>
          <P1
            fontWeight={400}
            style={{ opacity: 0.3, paddingRight: "3.5rem" }}
          >{`Balance: ${balanceCtx?.state[conversion[1]]}${
            CURRENCIES_SYMBOLS[conversion[1]]
          }`}</P1>
        </Row>
        <CurrencyCard
          currency={conversion[1]}
          amount={amounts[1]}
          type={"buy"}
          onCurrencyChange={handleChangeSellingCurrency}
          onAmountChange={handleChangeSellingAmount}
        />
      </Col>
      <Col style={{ paddingTop: "4rem" }} span={15}>
        <Row justify="center">
          <SubmitButton>EXCHANGE</SubmitButton>
        </Row>
      </Col>
    </Row>
  );
};
export default Homepage;
