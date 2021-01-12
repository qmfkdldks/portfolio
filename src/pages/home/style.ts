import styled from "styled-components";
import { down, up, only } from "styled-breakpoints";

export const Root = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  ${down("md")} {
    padding: 30px;
  }

  ${up("lg")} {
    padding-left: "20vw";
  }
`;

export const Title = styled.h1`
  ${down("md")} {
    width: 100%;
    font-size: 30px;
  }

  ${only("md")} {
    font-size: 80px;
  }

  ${up("lg")} {
    font-size: 100px;
    width: 80vw;
    max-width: 992px;
  }
`;

export const Name = styled.h3``;

export const Description = styled.div`
  ${up("md")} {
    font-size: 20px;
  }

  max-width: 576px;

  span {
    color: #f72585;
  }
`;
