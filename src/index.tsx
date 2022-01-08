import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyle } from "./style";

const rootElement = document.getElementById("root");
render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootElement
);
