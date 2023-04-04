import React from "react";
import ReactDOM  from "react-dom/client";

//React Element
const heading = <h1 id="heading" className="head" tabIndex="1">This is JSX Heading🚀</h1>;

//React Component


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);