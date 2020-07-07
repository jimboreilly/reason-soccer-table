'use strict';

var React = require("react");

function Title(Props) {
  var title = Props.title;
  var style = {
    fontWeight: "bold;",
    padding: "12px;",
    borderRadius: "12px 12px 0px 0px;"
  };
  return React.createElement("div", {
              style: style
            }, title);
}

var make = Title;

exports.make = make;
/* react Not a pure module */
