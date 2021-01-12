import React from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

function animateCallback(isVisible: boolean) {
  return {
    opacity: isVisible ? 1 : 0,
    // transform: isVisible ? "translateX(0)" : "translateX(200px)",
  };
}

interface IComponentProps {
  children: any;
  animateCallback: (isVisible: boolean) => object;
  delay?: number;
}

const Component = ({ children, animateCallback, delay }: IComponentProps) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Spring delay={delay} to={animateCallback(isVisible)}>
          {(props) => <div style={{ ...props }}>{children}</div>}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

Component.displayName = "Reveal";

Component.defaultProps = {
  animateCallback: animateCallback,
  delay: 300,
};

export default Component;
