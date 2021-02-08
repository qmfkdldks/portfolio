import styled from "styled-components";
import { up, between } from "styled-breakpoints";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${up("md")} {
    padding: none;
    /* justify-content: ${(props) =>
      props.inverted ? "flex-end" : "flex-start"}; */
  }

  ${between("md", "lg")} {
    div {
      max-width: 468px;
    }
  }

  ${up("lg")} {
    div {
      max-width: 768px;
    }
  }
`;
