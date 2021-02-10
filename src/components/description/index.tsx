import styled from "styled-components";
import { up } from "styled-breakpoints";

const Description = styled.p`
  max-width: 576px;

  span, p {
    color: #f72585;
  }

  ${up("lg")} {
    font-size: 20px;
  }
`;

export default Description;
