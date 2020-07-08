'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

function tableHeader(param) {
  var style = {
    fontWeight: "normal"
  };
  return React.createElement("tr", undefined, $$Array.of_list(List.map((function (headerName) {
                        return React.createElement("th", {
                                    style: style
                                  }, headerName);
                      }), {
                      hd: "",
                      tl: {
                        hd: "Club",
                        tl: {
                          hd: "Matches",
                          tl: {
                            hd: "Wins",
                            tl: {
                              hd: "Draws",
                              tl: {
                                hd: "Losses",
                                tl: {
                                  hd: "Pts",
                                  tl: {
                                    hd: "GF",
                                    tl: {
                                      hd: "GA",
                                      tl: {
                                        hd: "GD",
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })));
}

function calculatePoints(r) {
  return Math.imul(3, r.wins) + r.draws | 0;
}

function transformRecordRow(position, r) {
  var style = {
    textAlign: "right"
  };
  return React.createElement("tr", undefined, $$Array.of_list(List.map((function (value) {
                        return React.createElement("td", {
                                    style: style
                                  }, value);
                      }), {
                      hd: String(position + 1 | 0),
                      tl: {
                        hd: r.name,
                        tl: {
                          hd: String((r.wins + r.draws | 0) + r.losses | 0),
                          tl: {
                            hd: String(r.wins),
                            tl: {
                              hd: String(r.draws),
                              tl: {
                                hd: String(r.losses),
                                tl: {
                                  hd: String(calculatePoints(r)),
                                  tl: {
                                    hd: String(r.goalsFor),
                                    tl: {
                                      hd: String(r.goalsAgainst),
                                      tl: {
                                        hd: String(r.goalsFor - r.goalsAgainst | 0),
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })));
}

function Table(Props) {
  var records = Props.records;
  return React.createElement("div", undefined, React.createElement("table", undefined, tableHeader(undefined), $$Array.of_list(List.mapi(transformRecordRow, records))));
}

var make = Table;

exports.tableHeader = tableHeader;
exports.calculatePoints = calculatePoints;
exports.transformRecordRow = transformRecordRow;
exports.make = make;
/* react Not a pure module */
