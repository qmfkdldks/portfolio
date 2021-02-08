import styled from "styled-components";
import { up } from "styled-breakpoints";

const Description = styled.p`
  font-family: "Raleway", sans-serif;
  max-width: 576px;

  ${up("lg")} {
    font-size: 20px;
  }
`;

export default Description;
