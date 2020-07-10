'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Table$Header(Props) {
  var style = {
    fontWeight: "normal",
    padding: "0px 10px 10px 10px"
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

var style = {
  padding: "10px"
};

var leftAligned = Object.assign({}, style, {
      textAlign: "left"
    });

var bold = Object.assign({}, style, {
      fontWeight: "bold"
    });

var initialState = {
  hover: false
};

function reducer(_state, action) {
  if (action) {
    return {
            hover: false
          };
  } else {
    return {
            hover: true
          };
  }
}

function Table$RecordRow(Props) {
  var position = Props.position;
  var r = Props.r;
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var selectedRowStyle = match[0].hover ? ({
        backgroundColor: "rgba(0,0,0,0.2)",
        transition: "background-color 0.5s"
      }) : ({
        backgroundColor: "white",
        transition: "background-color  0.75s"
      });
  return React.createElement("tr", {
              style: selectedRowStyle,
              onMouseEnter: (function (_event) {
                  return Curry._1(dispatch, /* Enter */0);
                }),
              onMouseLeave: (function (_event) {
                  return Curry._1(dispatch, /* Leave */1);
                })
            }, $$Array.of_list(List.map((function (param) {
                        return React.createElement("td", {
                                    style: param[1]
                                  }, param[0]);
                      }), {
                      hd: [
                        String(position + 1 | 0),
                        style
                      ],
                      tl: {
                        hd: [
                          r.name,
                          leftAligned
                        ],
                        tl: {
                          hd: [
                            String((r.wins + r.draws | 0) + r.losses | 0),
                            style
                          ],
                          tl: {
                            hd: [
                              String(r.wins),
                              style
                            ],
                            tl: {
                              hd: [
                                String(r.draws),
                                style
                              ],
                              tl: {
                                hd: [
                                  String(r.losses),
                                  style
                                ],
                                tl: {
                                  hd: [
                                    String(calculatePoints(r)),
                                    bold
                                  ],
                                  tl: {
                                    hd: [
                                      String(r.goalsFor),
                                      style
                                    ],
                                    tl: {
                                      hd: [
                                        String(r.goalsAgainst),
                                        style
                                      ],
                                      tl: {
                                        hd: [
                                          String(r.goalsFor - r.goalsAgainst | 0),
                                          style
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

var RecordRow = {
  calculatePoints: calculatePoints,
  style: style,
  leftAligned: leftAligned,
  bold: bold,
  initialState: initialState,
  reducer: reducer,
  make: Table$RecordRow
};

function rowWithSeparater(position, r) {
  var separatingRow = {
    borderTop: "1px rgba(0, 0, 0, 0.2) solid"
  };
  return React.createElement(React.Fragment, undefined, React.createElement("tr", {
                  style: separatingRow
                }), React.createElement(Table$RecordRow, {
                  position: position,
                  r: r
                }));
}

function Table$Record(Props) {
  var position = Props.position;
  var r = Props.r;
  if (position !== 0) {
    return rowWithSeparater(position, r);
  } else {
    return React.createElement(Table$RecordRow, {
                position: position,
                r: r
              });
  }
}

var Record = {
  rowWithSeparater: rowWithSeparater,
  make: Table$Record
};

function Table(Props) {
  var records = Props.records;
  var tableStyle = {
    backgroundColor: "white",
    borderCollapse: "collapse",
    margin: "0 auto",
    padding: "100px 0px",
    textAlign: "center",
    width: "100%"
  };
  var containerStyle = {
    backgroundColor: "white",
    padding: "15px 0px 15px 0px",
    width: "700px",
    borderRadius: "15px",
    alignItems: "center"
  };
  return React.createElement("div", {
              style: containerStyle
            }, React.createElement("table", {
                  style: tableStyle
                }, React.createElement(Table$Header, {}), $$Array.of_list(List.mapi((function (position, r) {
                            return React.createElement(Table$Record, {
                                        position: position,
                                        r: r
                                      });
                          }), records))));
}

var make = Table;

exports.Header = Header;
exports.RecordRow = RecordRow;
exports.Record = Record;
exports.make = make;
/* leftAligned Not a pure module */
