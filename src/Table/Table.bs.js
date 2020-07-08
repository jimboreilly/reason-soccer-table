'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

function tableHeader(param) {
  return React.createElement("tr", undefined, React.createElement("th", undefined, "Name"), React.createElement("th", undefined, "Matches"), React.createElement("th", undefined, "Wins"), React.createElement("th", undefined, "Draws"), React.createElement("th", undefined, "Losses"), React.createElement("th", undefined, "Pts"), React.createElement("th", undefined, "GF"), React.createElement("th", undefined, "GA"), React.createElement("th", undefined, "GD"));
}

function calculatePoints(r) {
  return Math.imul(3, r.wins) + r.draws | 0;
}

function formatRecordRow(r) {
  return React.createElement("tr", undefined, React.createElement("td", undefined, r.name), React.createElement("td", undefined, String((r.wins + r.draws | 0) + r.losses | 0)), React.createElement("td", undefined, String(r.wins)), React.createElement("td", undefined, String(r.draws)), React.createElement("td", undefined, String(r.losses)), React.createElement("td", undefined, String(calculatePoints(r))), React.createElement("td", undefined, String(r.goalsFor)), React.createElement("td", undefined, String(r.goalsAgainst)), React.createElement("td", undefined, String(r.goalsFor - r.goalsAgainst | 0)));
}

function Table(Props) {
  var records = Props.records;
  return React.createElement("div", undefined, React.createElement("table", undefined, tableHeader(undefined), $$Array.of_list(List.map(formatRecordRow, records))));
}

var make = Table;

exports.tableHeader = tableHeader;
exports.calculatePoints = calculatePoints;
exports.formatRecordRow = formatRecordRow;
exports.make = make;
/* react Not a pure module */
