import styled from "styled-components";

type ButtonProps = {
  hasShadow?: boolean;
  color?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
};
export default styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2rem;
  font-size: 2.8rem;
  font-weight: 400;
  height: ${(props) => props.height || "6rem"};
  width: ${(props) => props.width || "fit-content"};
  padding-bottom: 0.2rem;
  color: ${(props) => props.color || "rgba(217, 4, 41, 0.8)"};
  background: rgb(255, 255, 255);
  transition: 0.5s box-shadow ease;
  box-shadow: 0px 4px 58px 7px rgba(0, 0, 0, 0.05);

  :hover {
    color: ${(props) => props.color || "rgba(217, 4, 41, 1)"};
    box-shadow: 0px 4px 40px 7px rgba(0, 0, 0, 0.1);
  }
`;
