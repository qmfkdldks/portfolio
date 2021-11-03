import ReactDOM from "react-dom";
import React, { useState, useCallback, useRef } from "react";
import { Parallax } from "react-spring/renderprops-addons";
import { useMediaQuery } from "react-responsive";
import Header from "../../layers/header";
import Example from "../../layers/example";
import Iseatz from "../../layers/iseatz";
import System from "../../layers/system";
import Proveat from "../../layers/proveat";
import Code from "../../layers/code";
import Slice from "../../layers/slice";
import Incubate from "../../layers/incubate";
import Demo from "../../layers/demo";
import Pizza from "../../layers/pizza";
import Tiles from "../../layers/tiles";

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
        <Header
          offset={0}
          speed={isTabletOrMobile ? 0 : 1}
          isTabletOrMobile={isTabletOrMobile}
        />

        <System offset={0} speed={-0.1} isTabletOrMobile={isTabletOrMobile} />

        <Demo
          offset={isTabletOrMobile ? 0.6 : 1}
          speed={1}
          isTabletOrMobile={isTabletOrMobile}
        />

        <Proveat
          offset={isTabletOrMobile ? 1.3 : 1}
          speed={isTabletOrMobile ? 0 : 0.5}
          isTabletOrMobile={isTabletOrMobile}
        />

        <Incubate
          offset={1.7}
          speed={isTabletOrMobile ? 0 : 1}
          isTabletOrMobile={isTabletOrMobile}
        />

        <Code
          offset={2}
          speed={0}
          onChange={onChange}
          isTabletOrMobile={isTabletOrMobile}
        />

        <Example
          toggle={toggle}
          offset={isTabletOrMobile ? 2.3 : 2}
          speed={0.5}
          isTabletOrMobile={isTabletOrMobile}
        />

        <Pizza
          offset={isTabletOrMobile ? 3 : 3}
          speed={0.3}
          isTabletOrMobile={isTabletOrMobile}
        />

        <Slice
          offset={isTabletOrMobile ? 3.3 : 3}
          speed={0}
          isTabletOrMobile={isTabletOrMobile}
        />

        <Tiles offset={4.7} speed={1} isTabletOrMobile={isTabletOrMobile} />

        <Iseatz offset={4} speed={0.6} isTabletOrMobile={isTabletOrMobile} />
      </Parallax>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
