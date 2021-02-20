import React from "react";
import Reveal from "../../components/reveal";
import Container from "../../components/container";
import Image from "../../components/image";

const Pizza = () => {
  return (
    <>
      <Container>
        <Reveal>
          <Image src="https://images.pexels.com/photos/4457110/pexels-photo-4457110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=700" />
        </Reveal>
      </Container>
    </>
  );
};

export default Pizza;
