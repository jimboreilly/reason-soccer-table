'use strict';

var React = require("react");
var Table$ReasonSoccerTable = require("../Table/Table.bs.js");

var tableStub = {
  hd: {
    name: "Liverpool",
    played: "34",
    wins: "30",
    draws: "2",
    losses: "2",
    points: "92",
    goalsFor: "75",
    goalsAgainst: "26",
    goalDifferential: "+49"
  },
  tl: {
    hd: {
      name: "Manchester City",
      played: "34",
      wins: "22",
      draws: "3",
      losses: "9",
      points: "69",
      goalsFor: "86",
      goalsAgainst: "34",
      goalDifferential: "+52"
    },
    tl: {
      hd: {
        name: "Chelsea",
        played: "34",
        wins: "18",
        draws: "6",
        losses: "10",
        points: "60",
        goalsFor: "64",
        goalsAgainst: "46",
        goalDifferential: "+17"
      },
      tl: /* [] */0
    }
  }
};

function App(Props) {
  return React.createElement(Table$ReasonSoccerTable.make, {
              records: tableStub
            });
}

var make = App;

exports.tableStub = tableStub;
exports.make = make;
/* react Not a pure module */
