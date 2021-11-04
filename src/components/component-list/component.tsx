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
        <Card />
        <Card />
      </List>
    </Container>
  );
};

export default Layer;
