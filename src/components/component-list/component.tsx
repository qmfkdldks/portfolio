import React from "react";
import Card from "../card";
import { useMediaQuery } from "react-responsive";
import Container from "../container";
import { List } from "./style";

const Layer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (isTabletOrMobile) return null;

  return (
    <Container inverted>
      <List>
        <Card />
        <Card imgSrc="https://cdn.dribbble.com/users/821812/screenshots/16097562/media/6f2810a2a5b4c4db08b3d42f944cc28c.png?compress=1&resize=230x230" />
        <Card imgSrc="https://i.imgur.com/JTvugNV.png?compress=1&resize=230x230" title="Like Button" description="#Like #Svelte" />
      </List>
    </Container>
  );
};

export default Layer;
