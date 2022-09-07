import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import BlobBG from "./components/sketch/sketch";
import reportWebVitals from "./reportWebVitals";

const body = ReactDOM.createRoot(document.getElementById("main"));

body.render(
  <>
    <App />
  </>
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
