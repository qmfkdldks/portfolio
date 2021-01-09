import ReactDOM from "react-dom";
import React, { useRef } from "react";
import Header from "../../components/header";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Container, Title, Name, Button, Description } from "./style";

export default function App() {
  const parallax = useRef<Parallax>(null);

  return (
    <>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={1}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <Container
            onClick={() => {
              parallax.current?.scrollTo(1);
            }}
          >
            <Name>Brian Kang</Name>
            <Title>Building system to create great quality of services</Title>
            <Description>
              I've been worknig as a Senior Full Stack engineer. My primary goal
              is building a system and set of mesurable criterias to create
              digital prodcuts.
              <span> Ruby On Rails </span>
              and <span> React.js </span>
            </Description>
            <Button>Checkout</Button>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <Container background="#aaa">
            <Description>
              I've been worknig as a senior full stack engineer. Ruby On Rails
              and React.js
            </Description>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
