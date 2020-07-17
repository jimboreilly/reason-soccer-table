'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Shared__TeamRecord$ReasonSoccerTable = require("../../../shared/Shared__TeamRecord.bs.js");

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
                            r.played,
                            style
                          ],
                          tl: {
                            hd: [
                              r.wins,
                              style
                            ],
                            tl: {
                              hd: [
                                r.draws,
                                style
                              ],
                              tl: {
                                hd: [
                                  r.losses,
                                  style
                                ],
                                tl: {
                                  hd: [
                                    r.points,
                                    bold
                                  ],
                                  tl: {
                                    hd: [
                                      r.goalsFor,
                                      style
                                    ],
                                    tl: {
                                      hd: [
                                        r.goalsAgainst,
                                        style
                                      ],
                                      tl: {
                                        hd: [
                                          r.goalDifferential,
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
  Props.records;
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
  var match = React.useState(function () {
        return /* LoadingTable */0;
      });
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("http://localhost:5000/").then(function (prim) {
                    return prim.json();
                  }).then(function (json) {
                  var table = Shared__TeamRecord$ReasonSoccerTable.Decode.ts(json);
                  Curry._1(setState, (function (_previousState) {
                          return /* LoadedTable */{
                                  _0: table
                                };
                        }));
                  return Promise.resolve(undefined);
                }).catch(function (err) {
                console.log(err);
                Curry._1(setState, (function (_previousState) {
                        return /* ErrorFetchingTable */1;
                      }));
                return Promise.resolve(undefined);
              });
          
        }), []);
  return React.createElement("div", {
              style: containerStyle
            }, typeof state === "number" ? (
                state !== 0 ? "An error occurred!" : "Loading..."
              ) : React.createElement("table", {
                    style: tableStyle
                  }, React.createElement(Table$Header, {}), $$Array.mapi((function (position, r) {
                          return React.createElement(Table$Record, {
                                      position: position,
                                      r: r
                                    });
                        }), state._0)));
}

var make = Table;

exports.Header = Header;
exports.RecordRow = RecordRow;
exports.Record = Record;
exports.make = make;
/* leftAligned Not a pure module */
