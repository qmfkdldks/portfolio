import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Title = styled.h1`
  max-width: 425px;

  ${up("md")} {
    font-size: 50px;
  }

  ${up("xl")} {
    font-size: 70px;
  }
`;

export const Description = styled.p`
  max-width: 576px;

  ${up("xl")} {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
`;
