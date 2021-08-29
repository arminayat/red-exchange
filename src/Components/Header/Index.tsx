import { Col, Row } from "antd";
import styled from "styled-components";
import Button from "../Button";
import { P1 } from "../Typography";
import { IoWallet } from "react-icons/io5";

const WalletButton = styled.button``;

const Header = () => {
  return (
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
          <Button width="4.5rem" height="4.5rem">
            <IoWallet />
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
export default Header;
