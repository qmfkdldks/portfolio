import styled from "styled-components";
import { up, between } from "styled-breakpoints";

export const Root = styled.div`
  width: 100%;
  height: 100%;
`;

interface IContainerProps {
  inverted?: boolean;
}

export const Container = styled.div<IContainerProps>`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${up("lg")} {
    padding: none;
    justify-content: ${(props) => (props.inverted ? "flex-end" : "flex-start")};
    margin-right: ${(props) => (props.inverted ? "7vw" : "0")};
    margin-left: ${(props) => (props.inverted ? "0" : "7vw")};
  }
`;

export const Image = styled.img`
  width: 100%;

  ${up("md")} {
    max-width: 470px;
  }

  ${up("lg")} {
    object-fit: cover;
    max-width: 1000px;
  }
`;
