import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Weather />
    </div>
    <p>
      This project was coded by Kerstin Mayer-Nelkenstock and is{" "}
      <a
        href="https://github.com/KerstinMN/react-test"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced
      </a>
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
