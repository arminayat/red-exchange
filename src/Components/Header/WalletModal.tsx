import { Modal, Row } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { BalanceContext } from "../../ContextAPI/BalanceContex";
import { P1 } from "../Typography";
import { IoCloseOutline } from "react-icons/io5";
import { CURRENCIES_SYMBOLS } from "../../Constants/currencies";
import { CurrenciesTypes } from "../../Models";

const StyledModal = styled(Modal)`
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

const BalanceRow = styled(Row)`
  background: #ecedf6;
  border-radius: 3rem;
  padding: 1.5rem 2.5rem;
  margin-top: 1.5rem;
`;

const WalletModal = ({
  close,
  visible,
}: {
  close: () => void;
  visible: boolean;
}) => {
  const balanceCtx = useContext(BalanceContext);
  return (
    <StyledModal
      title={null}
      visible={visible}
      footer={null}
      closeIcon={
        <button onClick={close}>
          <IoCloseOutline fontSize="3rem" />
        </button>
      }
      width="50rem"
    >
      <Row justify="center" style={{ paddingBottom: "1rem" }}>
        <P1 fontSize="2rem" letterSpacing="6px">
          WALLET BALANCE
        </P1>
      </Row>
      {Object.keys(balanceCtx?.state || {}).map((curr) => (
        <BalanceRow justify="space-between">
          <P1 fontSize="3rem">{curr}</P1>
          <P1 fontSize="3rem" fontWeight={400}>
            {balanceCtx?.state[curr as CurrenciesTypes] +
              CURRENCIES_SYMBOLS[curr as CurrenciesTypes]}
          </P1>
        </BalanceRow>
      ))}
    </StyledModal>
  );
};

export default WalletModal;
