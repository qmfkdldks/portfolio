import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import Posts from "./pages/posts";

const theme = {
    breakpoints: {
      sm: "425px",
      md: "768px",
      lg: "1440px",
      xl: "1980px",
    },
  };

function App(): JSX.Element {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/posts" element={<Posts/>} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
