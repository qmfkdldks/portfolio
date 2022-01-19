import React from "react";
import Container from "../../components/container";
import Title from "../../components/title";
import Description from "../../components/description";
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
              Havily inspired by Functional Programming and Object Oriented
              Proramming. I always learn new software techniques to come up with
              simplest and creative solution. I understand that having test
              coverage and well written documentation is critical. I learn new
              technologies not only from books and aritcles but also building
              new services and tirals and errors. That is why I love to create
              side projects.
              <span>
                Elixir, React Native, Circle CI/CD, GraphQL, Next.js, AWS,
                Svelte
              </span>
            </Description>
          </VisibilitySensor>
        </Reveal>
      </Container>
    </>
  );
};

export default System;
