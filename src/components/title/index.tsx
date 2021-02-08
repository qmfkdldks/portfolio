import styled from "styled-components";
import { up } from "styled-breakpoints";

const Title = styled.h1`
  max-width: 576px;

  ${up("md")} {
    font-size: 50px;
  }

  ${up("lg")} {
    font-size: 80px;
  }
`;

export default Title;
