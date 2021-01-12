import styled, { css } from "styled-components";
import { down, up, only } from "styled-breakpoints";

interface IBackgroundProps {
  inverted?: boolean;
}

export const Background = styled.div<IBackgroundProps>`
  ${(props) =>
    props.inverted &&
    css`
      background-color: #2a9d8f;
      color: #fff;
      padding: 15px 30px;
      /* border-radius: 8px; */
    `}

  max-width: 576px;
  margin-right: 100px;
`;

export const Title = styled.h1`
  ${down("md")} {
    font-size: 30px;
  }

  ${only("md")} {
    font-size: 80px;
  }

  ${up("lg")} {
    font-size: 80px;
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
