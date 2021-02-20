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
            If you are interested in creating digital product with well
            organized code. Please contact me. I wll respond you within 2 days.
          </Description>
          <p>
            <a href="https://www.linkedin.com/in/brian-kang-56ab51b1">
              Linkedin
            </a>
          </p>
          <p>
            <a href="mailto: qmfkdldks@gmail.com">qmfkdldks@gmail.com</a>
          </p>
        </Reveal>
      </Container>
    </>
  );
};

export default Iseatz;
