import ReactDOM from "react-dom";
import React, { useState, useCallback, useRef } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Root, Container, Title, Name, Description } from "./style";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/header";
import Card from "../../components/card";
import Reveal from "../../components/reveal";
import { useTransition, useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

export default function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const parallax = useRef<Parallax>(null);

  const [toggle, setToggle] = useState(false);
  const props = useSpring({
    width: "100%",
    height: "100%",
    backgroundColor: toggle ? "#22231c" : "#fff",
    color: toggle ? "#fff" : "black",
  });

  const onChange = useCallback(
    (isVisible: boolean) => {
      console.log("onChange");
      setToggle(isVisible);
    },
    [setToggle]
  );

  return (
    <animated.div style={props}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={-0.2}>
          {isDesktopOrLaptop && <Header />}
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.2}>
          <Container
            onClick={() => {
              parallax.current?.scrollTo(1);
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20vw",
            }}
          >
            <Reveal>
              <Name>Brian Kang</Name>

              <Title>Building system to create great quality of services</Title>

              <Description>
                I've been worknig as a <strong>Full Stack Engineer</strong>. My
                goal is building a business system which produces variety of
                digital products and test business models and hypotheses with
                less resources. I learn everything necessary to convert idea
                into reality.
              </Description>
              <Description>
                <span>
                  Ruby On Rails, React.js, Elixir, Node, GraphQL, Docker
                </span>
              </Description>
            </Reveal>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3}>
          <Container style={{ paddingLeft: "30px", maxWidth: "1100px" }}>
            <Reveal>
              <img width="100%" src="https://i.imgur.com/2sOSf9T.png" />
            </Reveal>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={1}>
          <Container style={{ paddingLeft: "10px", width: "768px" }}>
            <Reveal>
              <img src="https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/grido_fabrica_hoy_1601483576.jpg" />
            </Reveal>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={1}>
          <Container style={{ display: "flex", justifyContent: "flex-end" }}>
            <Reveal>
              <img
                style={{ maxWidth: "738px" }}
                src="https://i.imgur.com/ylNvpZB.jpg"
                alt=""
              />
            </Reveal>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <Container
            style={{
              paddingRight: "10vw",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Reveal>
              <Card inverted />
            </Reveal>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <VisibilitySensor onChange={onChange}>
            <Container
              style={{
                paddingRight: "10px",
                display: "flex",
                justifyContent: "flex-end",
                // background: "red",
              }}
            >
              <Reveal delay={0}>
                <Title>Unit Test</Title>
                <Description>
                  This course offers a comprehensive overview of the RSpec
                  testing library for the Ruby programming library. RSpec is the
                  most popular Ruby Gem of all time, with over 300 million
                  downloads to date. If you're new to the topic, testing is the
                  practice of "writing code that confirms that other code works
                  as expected". Tests control for regressions, which are changes
                  to the code that break the program.
                </Description>
              </Reveal>
            </Container>
          </VisibilitySensor>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0}>
          <Reveal delay={1000}>
            <img src="https://i.imgur.com/GumxjU1.png" alt="" />
          </Reveal>
        </ParallaxLayer>
      </Parallax>
    </animated.div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
