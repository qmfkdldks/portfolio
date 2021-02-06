import React from "react";
import { Title, Description } from "./style";
import Container from "../../components/container";
import Reveal from "../../components/reveal";
import VisibilitySensor from "react-visibility-sensor";

const System = ({ onChange }: { onChange: any }) => {
  return (
    <>
      <Container>
        <Reveal>
          <Title>How do I write code</Title>
          <VisibilitySensor onChange={onChange} partialVisibility={true}>
            <Description>
              This course offers a comprehensive overview of the RSpec testing
              library for the Ruby programming library. RSpec is the most
              popular Ruby Gem of all time, with over 300 million downloads to
              date. If you're new to the topic, testing is the practice of
              "writing code that confirms that other code works as expected".
              Tests control for regressions, which are changes to the code that
              break the program.
            </Description>
          </VisibilitySensor>
        </Reveal>
      </Container>
    </>
  );
};

export default System;
