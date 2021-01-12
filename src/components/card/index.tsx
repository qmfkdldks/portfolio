import React from "react";
import { Background, Title, Description } from "./style";

interface IComponentProps {
  inverted?: boolean;
}

const Component = ({ inverted }: IComponentProps) => {
  return (
    <Background inverted={inverted}>
      <Title>Great Software</Title>
      <Description>
        Software quality assurance is a broader term and the whole process spans
        the entire life cycle of the development of software, application or
        program. Below are some of the best practices for 2021, that a quality
        assurance tester should apply the entire life cycle of the development
        of software, application or program. Below are some of the best
        practices for 2021, that a quality assurance tester should apply:

        the entire life cycle of the development of software, application or
        program. Below are some of the best practices for 2021, that a quality
        assurance tester should apply:
      </Description>
    </Background>
  );
};

export default Component;
