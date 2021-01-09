import styled from "styled-components";
import { down } from "styled-breakpoints";

interface ContainerProps {
  background?: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.background || "none"};
  padding-left: 330px;
`;

export const Title = styled.h1`
  font-size: 120px;
  width: 1200px;

  ${down("md")} {
    font-size: 30px;
  }
`;

export const Name = styled.h3`
  color: #f72585;
`;

export const Description = styled.p`
  span {
    color: #f72585;
  }
`;

export const Button = styled.button``;
