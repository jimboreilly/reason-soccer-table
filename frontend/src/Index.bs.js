'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var App$ReasonSoccerTable = require("./App/App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonSoccerTable.make, {}), "app");

/*  Not a pure module */
