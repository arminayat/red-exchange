import { Modal, Row } from "antd";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  & .ant-modal-content {
    border-radius: 4rem;
  }
  & .ant-modal-header {
    border-radius: 1rem 1rem 0 0;
  }
  .ant-modal-close {
    left: 0.7rem;
    top: 1.8rem;
  }
`;

export const BalanceRow = styled(Row)`
  background: #ecedf6;
  border-radius: 3rem;
  padding: 1.5rem 2.5rem;
  margin-top: 1.5rem;
`;