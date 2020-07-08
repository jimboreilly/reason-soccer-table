'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

function formatRecordRow(record) {
  return React.createElement("div", undefined, record.name + (" " + (String(record.wins) + " wins")));
}

function Table(Props) {
  var records = Props.records;
  return React.createElement("div", undefined, $$Array.of_list(List.map(formatRecordRow, records)));
}

var make = Table;

exports.formatRecordRow = formatRecordRow;
exports.make = make;
/* react Not a pure module */
