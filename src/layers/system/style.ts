import styled from "styled-components";
import { up } from "styled-breakpoints";
import TitleComponent from "../../components/title"

export const Title = styled(TitleComponent)`
  max-width: 1024px;
`;

export const Name = styled.h3``;

export const Description = styled.p`
  max-width: 576px;

  span {
    color: #f72585;
  }

  ${up("xl")} {
    font-size: 20px;
  }
`;
