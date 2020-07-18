'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Table$ReasonSoccerTable = require("../Table/Table.bs.js");
var Shared__TeamRecord$ReasonSoccerTable = require("../../../shared/Shared__TeamRecord.bs.js");

function App(Props) {
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
                        return /* LoadedTable */{
                                _0: Shared__TeamRecord$ReasonSoccerTable.tExample
                              };
                      }));
                return Promise.resolve(undefined);
              });
          
        }), []);
  if (state) {
    return React.createElement(Table$ReasonSoccerTable.make, {
                records: state._0
              });
  } else {
    return "Loading...";
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
