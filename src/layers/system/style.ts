import styled from "styled-components";
import { up, between } from "styled-breakpoints";
import TitleComponent from "../../components/title";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${up("md")} {
    padding: none;
  }
`;

export const Title = styled(TitleComponent)`
  max-width: 1024px;

  ${up("md")} {
    font-size: 80px;
  }

  ${up("lg")} {
    font-size: 100px;
  }
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
