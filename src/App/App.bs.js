'use strict';

var React = require("react");
var Title$ReasonSoccerTable = require("../Title/Title.bs.js");
var ContainerTest$ReasonSoccerTable = require("../Container/ContainerTest.bs.js");
var BlinkingGreeting$ReasonSoccerTable = require("../BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$ReasonSoccerTable = require("../FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$ReasonSoccerTable = require("../ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$ReasonSoccerTable = require("../ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

function App(Props) {
  return React.createElement("div", undefined, React.createElement(BlinkingGreeting$ReasonSoccerTable.make, {
                  children: "Hello!"
                }), React.createElement(ReducerFromReactJSDocs$ReasonSoccerTable.make, {}), React.createElement(FetchedDogPictures$ReasonSoccerTable.make, {}), React.createElement(ReasonUsingJSUsingReason$ReasonSoccerTable.make, {}), React.createElement(ContainerTest$ReasonSoccerTable.make, {
                  title: "test",
                  children: React.createElement(Title$ReasonSoccerTable.make, {
                        title: "also test"
                      })
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
