import styled from "styled-components";
import { up } from "styled-breakpoints";

interface IContainerProps {
  inverted?: boolean;
}

export const Container = styled.div<IContainerProps>`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${up("xl")} {
    padding: none;
    justify-content: ${(props) => (props.inverted ? "flex-end" : "flex-start")};
    margin-right: ${(props) => (props.inverted ? "7vw" : "0")};
    margin-left: ${(props) => (props.inverted ? "0" : "7vw")};
  }
`;

export const Title = styled.h1`
  max-width: 1024px;

  ${up("md")} {
    font-size: 50px;
  }

  ${up("xl")} {
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
