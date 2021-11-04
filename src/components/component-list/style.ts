import styled from "styled-components";
import { up } from "styled-breakpoints";

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  > div {
    margin-bottom: 0px;
    margin-right: 15px;
  }

  ${up("lg")} {
    flex-direction: column;

    > div {
      margin-right: 0px;
      margin-bottom: 15px;
    }
  }
`;
