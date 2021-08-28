import { Col, Row } from "antd";
import CurrencyCard from "../Components/Pages/Homepage/CurrencyCard";
import { P1 } from "../Components/Typography";
import { AiOutlineSwap } from "react-icons/ai";
import styled from "styled-components";

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
  return (
    <Row justify="center" style={{ width: "100%" }} gutter={[0, 20]}>
      <Col span={15}>
        <CurrencyCard />
        <Row justify="space-between" style={{ paddingTop: "1rem" }}>
          <P1
            fontWeight={400}
            style={{ opacity: 0.3, paddingLeft: "3.5rem" }}
          >{`${1} ${"USD"} = ${0.34} ${"EUR"} `}</P1>
          <P1
            fontWeight={400}
            style={{ opacity: 0.3, paddingRight: "3.5rem" }}
          >{`Balance: ${20}`}</P1>
        </Row>
      </Col>
      <Col span={15}>
        <Row justify="center">
          <SwapButton>
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
          >{`Balance: ${20}`}</P1>
        </Row>
        <CurrencyCard />
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
