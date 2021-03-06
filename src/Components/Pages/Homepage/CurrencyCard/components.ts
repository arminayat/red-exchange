import { Input, Row } from "antd";
import styled from "styled-components";
import BREAKPOINTS from "../../../../Constants/breakpoints";

export const CardBox = styled(Row)<{ error: boolean }>`
  width: 100%;
  height: 15rem;
  padding: 1.3rem;
  background: #ffffff;
  box-shadow: ${(props) =>
    props.error
      ? "0px 4px 58px 7px rgba(239, 35, 60, 0.15)"
      : "0px 4px 58px 7px rgba(0, 0, 0, 0.05)"};
  border-radius: 40px;
  transition: 0.5s box-shadow ease;

  .ant-input-affix-wrapper-focused {
    border: none;
    box-shadow: none;
    :focus {
      box-shadow: none;
    }
  }
  .ant-input-affix-wrapper {
    :focus {
      box-shadow: none !important;
    }
  }
`;

export const CurrencyContainer = styled(Row)`
  height: 100%;
  width: 35%;
  padding: 2rem;
  background: #ecedf6;
  border-radius: 30px;
  @media ${BREAKPOINTS.mdDown} {
    width: 100%;
    height: 50%;
    padding: 1rem 2rem;
  }
`;
export const CurrencyInput = styled(Input)`
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

  @media ${BREAKPOINTS.mdDown} {
    font-size: 4rem;
    height: 50%;
    width: 100%;
    .ant-input {
      font-size: 3rem;
    }
  }
`;