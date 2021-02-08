import React from "react";
import Reveal from "../../components/reveal";
import Container from "../../components/container";
import Description from "../../components/description";
import Title from "../../components/title";

const System = () => {
  return (
    <>
      <Container inverted>
        <Reveal>
          <Title>Having enterprehuer experience</Title>
          <Description>
            Developed a restaurant management system and a digital menu.
            Implemented captive portal to make all visitors phone into digital
            menu. Provided new dining experience and new channel of
            communication. After huge amount of work I became Finalist in
            government incubator program #Potenciate and Grido Incubation
            Program in 2018. It was a huge experience because I had to design
            features, make hyphotesis and reach to client to see the result in
            the market.
            <span>Ruby On Rails, React.js, Heroku</span>
          </Description>
        </Reveal>
      </Container>
    </>
  );
};

export default System;
