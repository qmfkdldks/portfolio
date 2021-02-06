import React from "react";
import styled from "styled-components";
import { up, between } from "styled-breakpoints";

interface IContainerProps {
  inverted?: boolean;
}

const Container = styled.div<IContainerProps>`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${up("md")} {
    padding: none;
    justify-content: ${(props) => (props.inverted ? "flex-end" : "flex-start")};
  }

  ${between("md", "lg")} {
    div {
      max-width: 468px;
    }
    margin-right: ${(props) => (props.inverted ? "1vw" : "0")};
    margin-left: ${(props) => (props.inverted ? "0" : "1vw")};
  }

  ${up("lg")} {
    div {
      max-width: 768px;
    }
    margin-right: ${(props) => (props.inverted ? "7vw" : "0")};
    margin-left: ${(props) => (props.inverted ? "0" : "7vw")};
  }
`;

export default Container;
