import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IconContext } from "react-icons";

ReactDOM.render(
  <IconContext.Provider value={{ size: 40, color: "#FF577F" }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IconContext.Provider>,
  document.getElementById("root")
);
