import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

const Container = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 8px;
  box-shadow: 0.9px 0.9px 2.7px rgba(0, 0, 0, 0.022),
    2.2px 2.3px 6.9px rgba(0, 0, 0, 0.031),
    4.4px 4.8px 14.2px rgba(0, 0, 0, 0.039),
    9.1px 9.9px 29.2px rgba(0, 0, 0, 0.048), 25px 27px 80px rgba(0, 0, 0, 0.07);

  background-image: url("https://cdn.dribbble.com/users/1672258/screenshots/14782915/media/82c7f0a40dc60e4a2b49a02db4d92028.png?compress=1&resize=230x230");
  /* ${up("lg")} {
    font-size: 80px;
  } */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

const Description = styled.p``;

const Card = () => {
  return (
    <Container>
      <Title>Like Button</Title>
      <Description>#React #Typescript</Description>
    </Container>
  );
};

export default Card;
