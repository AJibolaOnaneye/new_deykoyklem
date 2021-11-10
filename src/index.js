import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById("root")
);
