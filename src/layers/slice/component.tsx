import React from "react";
import { Title, Description, Image } from "./style";
import Container from "../../components/container";
import Reveal from "../../components/reveal";

const Slice = () => {
  return (
    <>
      <Container inverted>
        <Reveal>
          <Title>Working with one of the best delivery team in US</Title>
          <Description>
            This course offers a comprehensive overview of the RSpec testing
            library for the Ruby programming library. RSpec is the most popular
            Ruby Gem of all time, with over 300 million downloads to date. If
            you're new to the topic, testing is the practice of "writing code
            that confirms that other code works as expected". Tests control for
            regressions, which are changes to the code that break the program.
          </Description>
        </Reveal>
      </Container>
      <Container inverted>
        <Image
          style={{ width: "100px" }}
          src="https://logodownload.org/wp-content/uploads/2017/04/forbes-logo-5.png"
        />
      </Container>
    </>
  );
};

export default Slice;
