'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Express = require("bs-express/src/Express.js");
var Process = require("process");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

var tableStub = {
  hd: {
    name: "Liverpool",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    played: "34",
    wins: "30",
    draws: "2",
    losses: "2",
    points: "92",
    goalsFor: "75",
    goalsAgainst: "26",
    goalDifferential: "+49"
  },
  tl: /* [] */0
};

function tableJson(records) {
  return $$Array.of_list(List.map((function (r) {
                    var json = {};
                    json["name"] = r.name;
                    json["crestUrl"] = r.crestUrl;
                    json["played"] = r.played;
                    json["wins"] = r.wins;
                    json["draws"] = r.draws;
                    json["losses"] = r.losses;
                    json["points"] = r.points;
                    json["goalsFor"] = r.goalsFor;
                    json["goalsAgainst"] = r.goalsAgainst;
                    json["goalDifferential"] = r.goalDifferential;
                    return json;
                  }), records));
}

var app = Express.express(undefined);

Express.App.get(app, "/test", Express.Middleware.from(function (next, req) {
          var match = Express.$$Request.baseUrl(req);
          if (match !== "") {
            return Curry._1(next, Express.Next.route);
          }
          var partial_arg = tableJson(tableStub);
          return function (param) {
            return Express.$$Response.sendJson(partial_arg, param);
          };
        }));

function onListen(e) {
  var val;
  try {
    val = e;
  }
  catch (raw_e){
    var e$1 = Caml_js_exceptions.internalToOCamlException(raw_e);
    if (e$1.RE_EXN_ID === Js_exn.$$Error) {
      console.log(e$1._1);
      return Process.exit(1);
    }
    throw e$1;
  }
  console.log("Listening at http://127.0.0.1:3000");
  
}

var server = Express.App.listen(app, 3000, undefined, onListen, undefined);

exports.tableStub = tableStub;
exports.tableJson = tableJson;
exports.app = app;
exports.onListen = onListen;
exports.server = server;
/* app Not a pure module */
