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

export const Title = styled.h1`
  max-width: 1024px;
  font-family: "Raleway", sans-serif;

  ${up("md")} {
    font-size: 50px;
  }

  ${up("xl")} {
    font-size: 100px;
  }
`;

export const Subtitle = styled.h1`
  font-family: "Raleway", sans-serif;
`;

export const Name = styled.h3`
  font-family: "Raleway", sans-serif;
`;

export const Description = styled.p`
  font-family: "Raleway", sans-serif;
  max-width: 576px;

  span {
    color: #f72585;
  }

  ${up("xl")} {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;

  ${up("lg")} {
    max-width: 470px;
  }

  ${up("xl")} {
    max-width: 690px;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 300px;
  max-width: 700px;
  background-color: #edf2f4;
`;
