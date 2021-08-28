import styled from "styled-components";
import BREAKPOINTS from "../Constants/breakpoints";

type typographyProps = {
  fontSize?: string;
  fontWeight?: number;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
};

export const H1 = styled.h1<typographyProps>`
  font-family: "Roboto Mono";
  font-size: 2.4rem;
  font-weight: ${(props) => props.fontWeight || 500};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || "#000"};

  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-top: ${(props) => props.marginTop || 0};
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};

  @media ${BREAKPOINTS.mdDown} {
    font-size: 1.4rem;
  }
`;
export const H2 = styled.h2<typographyProps>`
  font-family: "Roboto Mono";
  font-size: 2rem;
  font-weight: ${(props) => props.fontWeight || 500};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || "#000"};

  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-top: ${(props) => props.marginTop || 0};
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};

  @media ${BREAKPOINTS.mdDown} {
    font-size: 1.4rem;
  }
`;
export const H3 = styled.h3<typographyProps>`
  font-family: "Roboto Mono";
  font-size: 2.1rem;
  font-weight: ${(props) => props.fontWeight || 500};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || "#000"};

  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-top: ${(props) => props.marginTop || 0};
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};

  @media ${BREAKPOINTS.mdDown} {
    font-size: 1.2rem;
  }
`;
export const H6 = styled.h6<typographyProps>`
  font-family: "Roboto Mono";
  font-size: 1.8rem;
  font-weight: ${(props) => props.fontWeight || 500};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || "#000"};

  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-top: ${(props) => props.marginTop || 0};
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};
`;
export const P1 = styled.p<typographyProps>`
  font-family: "Roboto Mono";
  font-size: ${(props) => props.fontSize || "1.6rem"};
  font-weight: ${(props) => props.fontWeight || 500};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || "#000"};

  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-top: ${(props) => props.marginTop || 0};
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};

  @media ${BREAKPOINTS.mdDown} {
    font-size: 1.2rem;
  }
`;
export const P2 = styled.p<typographyProps>`
  font-family: "Roboto Mono";
  font-size: 1.4rem;
  font-weight: ${(props) => props.fontWeight || 500};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || "#000"};

  margin-bottom: ${(props) => props.marginBottom || 0} !important;
  margin-top: ${(props) => props.marginTop || 0} !important;
  margin-left: ${(props) => props.marginLeft || 0} !important;
  margin-right: ${(props) => props.marginRight || 0} !important;

  @media ${BREAKPOINTS.mdDown} {
    font-size: 1rem;
  }
`;

export const C1 = styled.caption<typographyProps>`
  font-family: "Roboto Mono";
  font-size: 1.2rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color || "#000"};

  margin-bottom: ${(props) => props.marginBottom || 0} !important;
  margin-top: ${(props) => props.marginTop || 0} !important;
  margin-left: ${(props) => props.marginLeft || 0} !important;
  margin-right: ${(props) => props.marginRight || 0} !important;

  @media ${BREAKPOINTS.mdDown} {
    font-size: 1rem;
  }
`;
