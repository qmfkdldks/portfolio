
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
}

body {
  position: relative;
  overflow: hidden;
  overscroll-behavior-y: none;
  font-family: 'Raleway', sans-serif;
  color: black;
  -webkit-font-smoothing: antialiased;
}
`;
