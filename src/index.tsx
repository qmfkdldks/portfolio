import * as React from "react";
import { render } from "react-dom";
import "./index.css";

import App from "./pages/home";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
