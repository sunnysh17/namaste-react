/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 Tag</h1>
 *          <h2>I am H1 Tag</h2> Sibling
 *      </div>
 *      <div id="child2">
 *          <h1>I am H1 Tag</h1>
 *          <h2>I am H1 Tag</h2> Sibling
 *      </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understand)
 */
import React from "react";
import ReactDOM  from "react-dom/client";
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am Sunny"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]) //To add more than one sibling use array
]);

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello From React"
); //create h1 react element

console.log(parent); //returns object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);// take object, convert into heading tag and put inside root
