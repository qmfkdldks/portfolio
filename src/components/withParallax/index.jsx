import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const withParallax = (WrappedComponent) => {
  return ({ offset, speed, ...rest }) => {
    return (
      <ParallaxLayer offset={offset} speed={speed}>
        <WrappedComponent {...rest} />
      </ParallaxLayer>
    );
  };
};

export default withParallax;
