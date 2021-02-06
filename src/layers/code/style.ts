import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Title = styled.h1`
  ${up("md")} {
    font-size: 50px;
  }

  ${up("lg")} {
    font-size: 70px;
  }
`;

export const Description = styled.p`
  span {
    color: #f72585;
  }

  ${up("lg")} {
    font-size: 20px;
  }
`;
