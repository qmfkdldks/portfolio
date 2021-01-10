import ReactDOM from "react-dom";
import React, { useRef } from "react";
import Header from "../../components/header";
import Card from "../../components/card";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Container, Title, Name, Description } from "./style";

export default function App() {
  const parallax = useRef<Parallax>(null);

  return (
    <>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={0} speed={0.2}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.2}>
          <Container
            onClick={() => {
              parallax.current?.scrollTo(1);
            }}
          >
            <Name>Brian Kang</Name>
            <Title>Building system to create great quality of services</Title>
            <Description>
              I've been worknig as a <strong>Full Stack Engineer</strong>. My
              goal is building a business system which produces variety of
              digital products and test business models and hypotheses with less
              resources. I learn everything necessary to convert idea into
              reality.
            </Description>
            <Description>
              <span>
                Ruby On Rails, React.js, Elixir, Node, GraphQL, Docker
              </span>
            </Description>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <img src="https://cdn.dribbble.com/users/1615584/screenshots/14613914/media/c662e2266679d648e0f339f116e9e093.jpg?compress=1&resize=1000x750" />
        </ParallaxLayer>

        <ParallaxLayer factor={2} offset={1} speed={1}>
          <Card />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
