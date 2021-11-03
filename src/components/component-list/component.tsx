import React from "react";
import Card from "../card";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Container from "../container";
import { up } from "styled-breakpoints";

const List = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  background-color: red;
  > div {
    margin-bottom: 0px;
    margin-right: 15px;
  }

  ${up("lg")} {
    flex-direction: column;

    > div {
      margin-right: 0px;
      margin-bottom: 15px;
    }
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
