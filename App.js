const parent = React.createElement(
  "div",
  { id: "parent", className: "parent" },
  [
    React.createElement("div", { id: "child", className: "child" }, [
      React.createElement(
        "h1",
        { id: "heading", className: "heading" },
        "I am h1 tag"
      ),
      React.createElement(
        "h2",
        { id: "heading2", className: "heading2" },
        "I am h2 tag"
      ),
    ]),
    React.createElement("div", { id: "child", className: "child" }, [
      React.createElement(
        "h1",
        { id: "heading", className: "heading" },
        "I am h1 tag"
      ),
      React.createElement(
        "h2",
        { id: "heading2", className: "heading2" },
        "I am h2 tag"
      ),
    ]),
  ]
);
const isRoot = ReactDOM.createRoot(document.getElementById("root"));
isRoot.render(parent);
