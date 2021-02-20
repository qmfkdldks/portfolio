import styled from "styled-components";
import { up } from "styled-breakpoints";

const Image = styled.img`
  width: 100%;

  ${up("md")} {
    max-width: 470px;
  }

  ${up("lg")} {
    object-fit: cover;
    max-width: 1000px;
  }
`;

export default Image;
