import React from "react";
import { Container, Title, Name, Description } from "./style";
import Reveal from "../../components/reveal";

const System = () => {
  return (
    <>
      <Container
      // onClick={() => {
      //   parallax.current?.scrollTo(1);
      // }}
      >
        <Reveal>
          <Name>Brian Kang</Name>
          <Title>Building system to create great quality of softwares</Title>
          <Description>
            <strong>Senior Full Stack Engineer</strong> with more than +3 years
            of experiences. My goal is building a business system that can
            reduce amount of time and resources to build great digital products.
          </Description>
          <Description>
            <span>
              Ruby On Rails, React.js, Typescript, Elixir, Node, GraphQL, Docker
            </span>
          </Description>
        </Reveal>
      </Container>
    </>
  );
};

export default System;
