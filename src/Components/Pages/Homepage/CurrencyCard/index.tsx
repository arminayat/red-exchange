import { Col, Input, InputNumber, Row, Space } from "antd";
import styled from "styled-components";
import Select from "../../../Select";
import { H6, P1 } from "../../../Typography";

const CardBox = styled(Row)`
  width: 100%;
  height: 15rem;
  padding: 1.3rem;
  background: #ffffff;
  box-shadow: 0px 4px 58px 7px rgba(0, 0, 0, 0.05);
  border-radius: 40px;

  .ant-input-affix-wrapper-focused {
    border: none;
    box-shadow: none;
    :focus{
      box-shadow: none;
    }
  }
  .ant-input-affix-wrapper{
    :focus{
      box-shadow: none !important;
    }
  }
`;
const CurrencyContainer = styled(Row)`
  height: 100%;
  width: 35%;
  padding: 2rem;
  background: #ecedf6;
  border-radius: 30px;
`;
const CurrencyInput = styled(Input)`
  width: 65%;
  height: 100%;
  padding-left: 2rem;
  font-size: 8rem;
  font-weight: 100;
  background-color: transparent;
  border: none;

  .ant-input {
    font-size: 8rem;
    border: none;
    font-weight: 100;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const CurrencyCard = () => {
  return (
      <CardBox justify="space-between">
        <CurrencyContainer>
          <Col span={24}>
            <H6>Sell</H6>
          </Col>
          <Col span={24}>
            <Select>
              <Select.Option value="USD">$USD</Select.Option>
              <Select.Option value="EUR">€EUR</Select.Option>
              <Select.Option value="GBP">£GBP</Select.Option>
            </Select>
          </Col>
        </CurrencyContainer>
        <CurrencyInput suffix="+" placeholder="0"/>
      </CardBox>
  );
};
export default CurrencyCard;
