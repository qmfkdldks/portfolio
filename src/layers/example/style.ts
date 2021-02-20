import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  font-size: 15px;
  height: 400px;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  ${up("md")} {
    justify-content: flex-end;
  }

  ${up("lg")} {
    height: auto;
    font-size: 14px;
    margin-right: 10vw;
  }
`;
