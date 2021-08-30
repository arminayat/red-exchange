import styled from "styled-components";
import BREAKPOINTS from "../../../../Constants/breakpoints";

export const SwapButton = styled.button`
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
export const SubmitButton = styled.button`
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
  transition: 0.5s box-shadow ease, 0.5s color ease, 0.5s background-color ease;
  box-shadow: 0px 4px 58px 7px rgba(0, 0, 0, 0.05);
  word-spacing: 4px;
  margin-top: 4rem;

  :hover {
    color: rgba(217, 4, 41, 1);
    box-shadow: 0px 4px 40px 7px rgba(239, 35, 60, 0.15);
  }
  :disabled {
    color: rgba(0, 0, 0, 0.45);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: none;
    cursor: not-allowed;
  }

  @media ${BREAKPOINTS.mdDown} {
    margin-top: 2rem;
  }
`;
