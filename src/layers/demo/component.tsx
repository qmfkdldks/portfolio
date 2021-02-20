import React from "react";
import Reveal from "../../components/reveal";
import Container from "../../components/container";
import Image from "../../components/image";

const Demo = () => {
  return (
    <>
      <Container>
        <Reveal>
          {/* backgroundImage: "url('https://i.imgur.com/wZhu3iw.webp?1')", */}
          <Image src="https://i.imgur.com/wZhu3iw.webp" />
        </Reveal>
      </Container>
    </>
  );
};

export default Demo;
