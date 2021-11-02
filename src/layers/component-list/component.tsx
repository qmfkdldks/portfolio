import React from "react";
import Card from "../../components/card";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Container from "../../components/container";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div {
    margin-bottom: 15px;
  }
`;

const Layer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
