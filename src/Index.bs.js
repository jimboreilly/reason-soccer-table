'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var App$ReasonSoccerTable = require("./App/App.bs.js");
var ExampleStyles$ReasonSoccerTable = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReasonSoccerTable.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonSoccerTable.make, {}), "app");

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
