import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./pages/home";
import { GlobalStyle } from "./style";

const theme = {
  breakpoints: {
    sm: "425px",
    md: "768px",
    lg: "1440px",
    xl: "1980px",
  },
};

const rootElement = document.getElementById("root");
render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  rootElement
);
