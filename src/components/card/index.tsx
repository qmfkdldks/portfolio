import React from "react";
import { Container, Shadow, Title, Description } from "./style";

const IMG =
  "https://cdn.dribbble.com/users/2564256/screenshots/14454424/media/e3033b57f1fab9ec1d35a4b17f968d25.png?compress=1&resize=230x230";

interface IComponentProps {
  title?: string;
  description?: string;
  imgSrc?: string;
}

const Card = ({ title, description, imgSrc }: IComponentProps) => {
  return (
    <Container imgSrc={imgSrc || IMG}>
      <Shadow>
        <Title>Like Button</Title>
        <Description>#React #Typescript</Description>
      </Shadow>
    </Container>
  );
};

export default Card;
