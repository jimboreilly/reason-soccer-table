'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var App$ReasonSoccerTable = require("./App/App.bs.js");
var ExampleStyles$ReasonSoccerTable = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReasonSoccerTable.style;

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonSoccerTable.make, {}), "app");

exports.style = style;
/* style Not a pure module */
