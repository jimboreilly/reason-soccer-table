'use strict';

var React = require("react");

function Container$Title(Props) {
  var title = Props.title;
  var style = {
    fontWeight: "bold",
    padding: "12px",
    borderRadius: "12px 12px 0px 0px"
  };
  return React.createElement("div", {
              style: style
            }, title);
}

var Title = {
  make: Container$Title
};

function Container$Content(Props) {
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

var Content = {
  make: Container$Content
};

function Container(Props) {
  var title = Props.title;
  var children = Props.children;
  var style = {
    fontFamily: "sans-serif",
    margin: "12px 0px",
    width: "720px",
    borderRadius: "12px",
    boxShadow: "0px 4px 16px rgb(200, 200, 200)"
  };
  return React.createElement("div", {
              style: style
            }, React.createElement(Container$Title, {
                  title: title
                }), React.createElement(Container$Content, {
                  children: children
                }));
}

var make = Container;

exports.Title = Title;
exports.Content = Content;
exports.make = make;
/* react Not a pure module */
