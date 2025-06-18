import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I am arrived nikhil freed from revenue")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "I am H2 Tag")
  ),
]);
console.log(heading);
const root = createRoot(document.getElementById("root"));

root.render(parent);
