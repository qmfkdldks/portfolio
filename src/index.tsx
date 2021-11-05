import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import Post from "./pages/post";
import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>,
  rootElement
);
