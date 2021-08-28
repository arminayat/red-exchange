import BREAKPOINTS from "../Constants/breakpoints";
import { Select as AntdSelect } from "antd";
import styled from "styled-components";

type SelectProps = { searchPadding?: String };

const Select = styled(AntdSelect)<SelectProps>`
  width: 100% !important;

  & .ant-select-selection-placeholder {
    padding-top: 1rem !important;
    /* @media ${BREAKPOINTS.mdDown} {
      padding-top: 0rem !important;
    } */
  }
  & .ant-select-selection-item {
    font-size: 5rem !important;
    padding-top: 1rem !important;
    /* @media ${BREAKPOINTS.mdDown} {
      font-size: 1.2rem !important;
      padding-top: 0rem !important;
    } */
  }
  & .ant-select-selector {
    background-color: transparent !important;
    height: 7rem !important;
    font-size: 2.8rem !important;
    padding: 1rem 0 !important;
    border: none !important;

    padding-right: ${(props) =>
      props.searchPadding ? "5rem !important" : "1.5rem !important"};
    /* 
    @media ${BREAKPOINTS.mdDown} {
      height: 4rem !important;
      font-size: 1.2rem !important;
      padding: 0.5rem 0 !important;
      padding-right: ${(props) =>
      props.searchPadding ? "3rem !important" : "1rem !important"};
    } */
  }
`;

export default Select;
