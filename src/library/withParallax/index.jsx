import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";

/**
 * 
 * 
 * 
 */
const withParallax = (WrappedComponent) => {
  return ({ offset, speed, isTabletOrMobile, ...rest }) => {
    if (isTabletOrMobile) {
      return <WrappedComponent {...rest} isTabletOrMobile={isTabletOrMobile} />;
    } else {
      return (
        <ParallaxLayer offset={offset} speed={speed}>
          <WrappedComponent {...rest} isTabletOrMobile={isTabletOrMobile} />
        </ParallaxLayer>
      );
    }
  };
};

export default withParallax;
