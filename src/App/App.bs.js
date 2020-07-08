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

var tableStub = {
  hd: {
    name: "Liverpool",
    wins: 29,
    draws: 2,
    losses: 2,
    goalsFor: 72,
    goalsAgainst: 25
  },
  tl: {
    hd: {
      name: "Manchester City",
      wins: 21,
      draws: 3,
      losses: 9,
      goalsFor: 81,
      goalsAgainst: 34
    },
    tl: {
      hd: {
        name: "Chelsea",
        wins: 18,
        draws: 6,
        losses: 10,
        goalsFor: 63,
        goalsAgainst: 56
      },
      tl: /* [] */0
    }
  }
};

var make = App;

exports.tableStub = tableStub;
exports.make = make;
/* react Not a pure module */
