import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./Components/Navbar";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <div className="">
        <Nav />
      </div>
      <App />
    </div>
  </React.StrictMode>
);
