import React from "react";
import { Container, Background, Title, Description, Image } from "./style";
// import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const Card = () => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={300}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(200px)",
          }}
        >
          {(props) => (
            <Container style={{ ...props }}>
              <Background>
                <Title>Great Software</Title>
                <Description>Lorem ipsum</Description>
              </Background>
            </Container>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

export default Card;
