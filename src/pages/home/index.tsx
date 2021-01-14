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
    backgroundColor: toggle ? "#282922" : "#fff",
    color: toggle ? "#fff" : "black",
  });

  const imgProps = useSpring({
    width: "100%",
    height: "100%",
    backgroundColor: toggle ? "#282922" : "#fff",
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
              <Title>
                Building system to create great quality of softwares
              </Title>
              <Description>
                <strong>Full Stack Engineer</strong> with more than 3 years of
                experiences. My goal is building a business system that can
                reduce amount of time and resources to build great digital
                products. I learn everything necessary to convert idea into
                reality.
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
          <Container style={{ paddingLeft: "30px" }}>
            <Reveal>
              <div
                style={{
                  backgroundImage: "url('https://i.imgur.com/wZhu3iw.webp?1')",
                  maxWidth: "900px",
                  height: "900px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
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
              <Title>Digital Menu</Title>
              <Description>
                This course offers a comprehensive overview of the RSpec testing
                library for the Ruby programming library. RSpec is the most
                popular Ruby Gem of all time, with over 300 million downloads to
                date. If you're new to the topic, testing is the practice of
                "writing code that confirms that other code works as expected".
                Tests control for regressions, which are changes to the code
                that break the program.
              </Description>
            </Reveal>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={1}>
          {/* <Container style={{ display: "flex", justifyContent: "flex-end" }}>
              <Reveal>
                <img
                src="https://i.imgur.com/ylNvpZB.webp"
                alt=""
              /> 
              </Reveal>
            </Container> */}
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={-0.2}>
          <Container
            style={{
              paddingRight: "10px",
              display: "flex",
              justifyContent: "flex-end",
              // background: "red",
            }}
          >
            <Reveal>
              <Title>Unit Test</Title>
              <VisibilitySensor onChange={onChange}>
                <Description>
                  This course offers a comprehensive overview of the RSpec
                  testing library for the Ruby programming library. RSpec is the
                  most popular Ruby Gem of all time, with over 300 million
                  downloads to date. If you're new to the topic, testing is the
                  practice of "writing code that confirms that other code works
                  as expected". Tests control for regressions, which are changes
                  to the code that break the program.
                </Description>
              </VisibilitySensor>
            </Reveal>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0}>
          {toggle && (
            <Reveal>
              <animated.img
                style={{ maxWidth: "587px" }}
                src="https://i.imgur.com/GumxjU1.webp"
                alt=""
              />
            </Reveal>
          )}
        </ParallaxLayer>
      </Parallax>
    </animated.div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
