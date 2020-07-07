'use strict';

var React = require("react");

function ContainerContent(Props) {
  var children = Props.children;
  var style = {
    backgroundColor: "white",
    padding: "16px",
    borderRadius: "0px 0px 12px 12px"
  };
  return React.createElement("div", {
              style: style
            }, children);
}

var make = ContainerContent;

exports.make = make;
/* react Not a pure module */
