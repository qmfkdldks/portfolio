import React from "react";
import { Title, Description } from "./style";
import Reveal from "../../components/reveal";
import Container from "../../components/container";

const System = () => {
  return (
    <>
      <Container inverted>
        <Reveal>
          <Title>Having an experience as an enterprehuer</Title>
          <Description>
            Developed a restaurant management system which connects customer
            phones to create a new channel of communication. Became Finalist in
            government incubator program #Potenciate and Incubation Program of
            Grido in 2018
          </Description>
        </Reveal>
      </Container>
    </>
  );
};

export default System;
