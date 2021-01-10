import styled from "styled-components";
import { down, up, only } from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Background = styled.div`
  background-color: #f72585;
  max-width: 576px;
  margin-left: 100px;
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

export const Description = styled.div`
  ${up("md")} {
    font-size: 20px;
  }

  max-width: 576px;

  span {
    color: #f72585;
  }
`;

export const Image = styled.img`
  max-width: 576px;
`;
