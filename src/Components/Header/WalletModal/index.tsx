import { Row } from "antd";
import { useContext } from "react";
import { BalanceContext } from "../../../ContextAPI/BalanceContext";
import { P1 } from "../../Typography";
import { IoCloseOutline } from "react-icons/io5";
import { CURRENCIES_SYMBOLS } from "../../../Constants/currencies";
import { CurrenciesTypes } from "../../../Models";
import { BalanceRow, StyledModal } from "./components";

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
        <BalanceRow justify="space-between" key="curr">
          <P1 fontSize="3rem">{curr}</P1>
          <P1 fontSize="3rem" fontWeight={400}>
            {balanceCtx?.state[curr as CurrenciesTypes].toFixed(2) +
              CURRENCIES_SYMBOLS[curr as CurrenciesTypes]}
          </P1>
        </BalanceRow>
      ))}
    </StyledModal>
  );
};

export default WalletModal;
