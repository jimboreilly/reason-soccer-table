'use strict';

var React = require("react");
var Table$ReasonSoccerTable = require("../Table/Table.bs.js");

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
        goalsAgainst: 46
      },
      tl: /* [] */0
    }
  }
};

function App(Props) {
  return React.createElement("div", undefined, React.createElement(Table$ReasonSoccerTable.make, {
                  records: tableStub
                }));
}

var make = App;

exports.tableStub = tableStub;
exports.make = make;
/* react Not a pure module */
