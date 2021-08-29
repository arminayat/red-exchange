import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import "antd/dist/antd.css";
import App from "./App";
import { BalanceContextProvider } from "./ContextAPI/BalanceContex";

ReactDOM.render(
  <React.StrictMode>
    <BalanceContextProvider>
      <App />
    </BalanceContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
