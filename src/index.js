import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchProvider from './store/provider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
