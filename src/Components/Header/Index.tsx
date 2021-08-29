import { Col, Row } from "antd";
import Button from "../Button";
import { P1 } from "../Typography";
import { IoWallet } from "react-icons/io5";
import WalletModal from "./WalletModal";
import { useState } from "react";

const Header = () => {
  const [walletModalVisible, setWalletModalVisible] = useState(false);
  return (
    <>
      <Row justify="center" style={{ padding: "0 3rem 5rem 3rem" }}>
        <Col span={15}>
          <Row justify="space-between" align="middle">
            <P1
              style={{ letterSpacing: "1rem" }}
              color="var(--primary)"
              fontWeight={400}
              fontSize="2rem"
            >
              RED<span style={{ fontWeight: 700 }}>EXCHANGE</span>
            </P1>
            <Button
              width="4.5rem"
              height="4.5rem"
              onClick={() => setWalletModalVisible(true)}
            >
              <IoWallet />
            </Button>
          </Row>
        </Col>
      </Row>
      <WalletModal
        close={() => setWalletModalVisible(false)}
        visible={walletModalVisible}
      />
    </>
  );
};

export default Header;
