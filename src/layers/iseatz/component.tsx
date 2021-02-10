import React from "react";
import Reveal from "../../components/reveal";
import { Container } from "./style";
import Title from "../../components/title";
import Description from "../../components/description";

const Iseatz = () => {
  return (
    <>
      <Container>
        <Title>Do you want to build successful digital product?</Title>
        <Reveal>
          <Description>
            If you are interested in making MVP or digital product.
            Please contact me. I wll respond you within 2 days.
          </Description>
          <a href="https://www.linkedin.com/in/brian-kang-56ab51b1">Linkedin</a>
        </Reveal>
      </Container>
    </>
  );
};

export default Iseatz;
