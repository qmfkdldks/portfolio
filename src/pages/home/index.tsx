import ReactDOM from "react-dom";
import React, { useState, useCallback, useRef } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Image } from "./style";
import Container from "../../components/container";
import Header from "../../components/header";
import Reveal from "../../components/reveal";
import Example from "../../layers/example";
import { useMediaQuery } from "react-responsive";
import Iseatz from "../../layers/iseatz";
import System from "../../layers/system";
import Proveat from "../../layers/proveat";
import Code from "../../layers/code";
import Slice from "../../layers/slice";

export default function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const parallax = useRef<Parallax>(null);

  const [toggle, setToggle] = useState(false);

  const onChange = useCallback(
    (isVisible: boolean) => {
      setToggle(isVisible);
    },
    [setToggle]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: toggle ? "#282c34" : "transparent",
        transition: "all 0.5s ease",
        color: toggle ? "#fff" : "black",
      }}
    >
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer offset={0} speed={isTabletOrMobile ? 0 : 1}>
          {!isTabletOrMobile && <Header />}
        </ParallaxLayer>

        <System offset={0} speed={-0.1} />

        <ParallaxLayer offset={isTabletOrMobile ? 0.8 : 1}>
          <Container>
            <Reveal>
              {/* backgroundImage: "url('https://i.imgur.com/wZhu3iw.webp?1')", */}
              <Image src="https://cdn.dribbble.com/users/4979509/screenshots/15068234/media/fc57ec3e852bc69d1b8956a22826c840.png?compress=1&resize=1000x750" />
            </Reveal>
          </Container>
        </ParallaxLayer>

        <Proveat
          offset={isTabletOrMobile ? 1.3 : 1}
          speed={isTabletOrMobile ? 0 : 0.5}
        />

        <ParallaxLayer offset={1.7} speed={isTabletOrMobile ? 0 : 1}>
          <Container inverted>
            <Reveal>
              <Image src="https://imgur.com/eSz6INq.jpg" alt="" />
              <p>
                <strong>
                  15 out of +2000 startup teams #Incubate Goverment Incubation
                  Program.
                </strong>
              </p>
            </Reveal>
          </Container>
        </ParallaxLayer>

        <Code offset={2} speed={0} onChange={onChange} />

        <Example
          toggle={toggle}
          offset={isTabletOrMobile ? 2.3 : 2}
          speed={0.5}
        />

        <ParallaxLayer offset={isTabletOrMobile ? 3 : 3} speed={0.3}>
          <Container>
            <Reveal>
              <Image src="https://images.pexels.com/photos/4457110/pexels-photo-4457110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=700" />
            </Reveal>
          </Container>
        </ParallaxLayer>

        <Slice offset={isTabletOrMobile ? 3.3 : 3} speed={0} />

        <ParallaxLayer offset={4.7} speed={1}>
          <Container inverted>
            <Image src="https://cdn.dribbble.com/users/1644453/screenshots/14147996/media/310afd5b7d4c1d82cb8b4823fc10ec11.png?compress=1&resize=1000x750" />
            <Image src="https://cdn.dribbble.com/users/3963627/screenshots/15062023/media/216b952e2beea939e393c5d12866a2c1.png?compress=1&resize=1000x750" />
          </Container>
        </ParallaxLayer>

        <Iseatz offset={4} speed={0.6} />
      </Parallax>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
