{
  /* <div id="parent">
  <div id="child1">
    <h1>H1 tag</h1>
    <h2>H2 tag</h2>
  </div>
  <div id="child2">
    <h1>H1 tag</h1>
    <h2>H2 tag</h2>
  </div>
</div>;

React.createElement(Object) ==> HTML (Browser Understand) 
*/
}

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am H1 Tag")
  )
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
