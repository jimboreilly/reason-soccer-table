'use strict';

var React = require("react");
var Container$ReasonSoccerTable = require("../Container/Container.bs.js");
var BlinkingGreeting$ReasonSoccerTable = require("../BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$ReasonSoccerTable = require("../FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$ReasonSoccerTable = require("../ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$ReasonSoccerTable = require("../ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

function App(Props) {
  return React.createElement("div", undefined, React.createElement(Container$ReasonSoccerTable.make, {
                  title: "Blinking Greeting",
                  children: React.createElement(BlinkingGreeting$ReasonSoccerTable.make, {
                        children: "Hello!"
                      })
                }), React.createElement(Container$ReasonSoccerTable.make, {
                  title: "Reducer From ReactJS Docs",
                  children: React.createElement(ReducerFromReactJSDocs$ReasonSoccerTable.make, {})
                }), React.createElement(Container$ReasonSoccerTable.make, {
                  title: "Fetched Dog Pictures",
                  children: React.createElement(FetchedDogPictures$ReasonSoccerTable.make, {})
                }), React.createElement(Container$ReasonSoccerTable.make, {
                  title: "Reason Using JS Using Reason",
                  children: React.createElement(ReasonUsingJSUsingReason$ReasonSoccerTable.make, {})
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
