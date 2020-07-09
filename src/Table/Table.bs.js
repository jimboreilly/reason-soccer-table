'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

function Table$Header(Props) {
  var style = {
    fontWeight: "normal",
    textAlign: "center"
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
                          hd: "P",
                          tl: {
                            hd: "W",
                            tl: {
                              hd: "D",
                              tl: {
                                hd: "L",
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

var Header = {
  make: Table$Header
};

function calculatePoints(r) {
  return Math.imul(3, r.wins) + r.draws | 0;
}

var normalStyle = {
  padding: "2px 20px 10px 10px",
  textAlign: "right"
};

var boldStyle = {
  fontWeight: "bold",
  textAlign: "right"
};

function recordRow(position, r) {
  return React.createElement("tr", undefined, $$Array.of_list(List.map((function (param) {
                        return React.createElement("td", {
                                    style: param[1]
                                  }, param[0]);
                      }), {
                      hd: [
                        String(position + 1 | 0),
                        normalStyle
                      ],
                      tl: {
                        hd: [
                          r.name,
                          normalStyle
                        ],
                        tl: {
                          hd: [
                            String((r.wins + r.draws | 0) + r.losses | 0),
                            normalStyle
                          ],
                          tl: {
                            hd: [
                              String(r.wins),
                              normalStyle
                            ],
                            tl: {
                              hd: [
                                String(r.draws),
                                normalStyle
                              ],
                              tl: {
                                hd: [
                                  String(r.losses),
                                  normalStyle
                                ],
                                tl: {
                                  hd: [
                                    String(calculatePoints(r)),
                                    boldStyle
                                  ],
                                  tl: {
                                    hd: [
                                      String(r.goalsFor),
                                      normalStyle
                                    ],
                                    tl: {
                                      hd: [
                                        String(r.goalsAgainst),
                                        normalStyle
                                      ],
                                      tl: {
                                        hd: [
                                          String(r.goalsFor - r.goalsAgainst | 0),
                                          normalStyle
                                        ],
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

var separatingRow = {
  borderTop: "1px rgba(0, 0, 0, 0.2) solid",
  marginLeft: "-20%",
  padding: "0px 0px -20px -20px"
};

function rowWithSeparater(position, r) {
  return React.createElement(React.Fragment, undefined, React.createElement("tr", {
                  style: separatingRow
                }), recordRow(position, r));
}

function Table$Record(Props) {
  var position = Props.position;
  var r = Props.r;
  if (position !== 0) {
    return rowWithSeparater(position, r);
  } else {
    return recordRow(position, r);
  }
}

var Record = {
  calculatePoints: calculatePoints,
  normalStyle: normalStyle,
  boldStyle: boldStyle,
  recordRow: recordRow,
  separatingRow: separatingRow,
  rowWithSeparater: rowWithSeparater,
  make: Table$Record
};

function Table(Props) {
  var records = Props.records;
  var style = {
    backgroundColor: "white",
    borderCollapse: "collapse",
    margin: "0 auto",
    padding: "100px 0px",
    width: "95%"
  };
  var containerStyle = {
    backgroundColor: "white",
    width: "700px",
    borderRadius: "15px",
    alignItems: "center"
  };
  return React.createElement("div", {
              style: containerStyle
            }, React.createElement("table", {
                  style: style
                }, React.createElement(Table$Header, {}), $$Array.of_list(List.mapi((function (position, r) {
                            return React.createElement(Table$Record, {
                                        position: position,
                                        r: r
                                      });
                          }), records))));
}

var make = Table;

exports.Header = Header;
exports.Record = Record;
exports.make = make;
/* react Not a pure module */
