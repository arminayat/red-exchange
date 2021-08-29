import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import "antd/dist/antd.css";
import App from "./App";
import { BalanceContextProvider } from "./ContextAPI/BalanceContex";
import { QueryClientProvider } from "react-query";
import queryClient from "./RESTservice/queryClient";

ReactDOM.render(
  <React.StrictMode>
    <BalanceContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BalanceContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
