import React from "react";
import Reveal from "../../components/reveal";
import Container from "../../components/container";
import Image from "../../components/image";

const Incubate = () => {
  return (
    <>
      <Container inverted>
        <Reveal>
          <Image src="https://imgur.com/eSz6INq.jpg" alt="" />
          <p>
            <strong>
              15 out of +2000 startup teams #Incubate Goverment Incubation
              Program.
            </strong>
          </p>
        </Reveal>
      </Container>
    </>
  );
};

export default Incubate;
