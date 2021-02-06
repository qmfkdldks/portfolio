import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  font-size: 13px;
  height: 400px;
  overflow-y: auto;

  ${up("md")} {
    font-size: 18px;
    height: auto;
  }

  ${up("lg")} {
    display: flex;
    justify-content: flex-end;
    margin-right: "7vw";
  }
`;
