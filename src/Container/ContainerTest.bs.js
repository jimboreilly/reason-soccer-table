'use strict';

var React = require("react");
var Title$ReasonSoccerTable = require("./Title.bs.js");

function ContainerTest(Props) {
  var title = Props.title;
  var children = Props.children;
  var style = {
    fontFamily: "sans-serif;",
    margin: "12px 0px",
    width: "720px;",
    borderRadius: "12px;",
    boxShadow: "0px 4px 16px rgb(200, 200, 200);"
  };
  return React.createElement("div", {
              style: style
            }, React.createElement(Title$ReasonSoccerTable.make, {
                  title: title
                }), children);
}

var make = ContainerTest;

exports.make = make;
/* react Not a pure module */
