'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Express = require("bs-express/src/Express.js");
var Process = require("process");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

function makeSuccessJson(param) {
  var json = {};
  json["success"] = true;
  return json;
}

var app = Express.express(undefined);

Express.App.get(app, "/", Express.Middleware.from(function (next, req) {
          var match = Express.$$Request.baseUrl(req);
          if (match !== "") {
            return Curry._1(next, Express.Next.route);
          }
          var partial_arg = makeSuccessJson(undefined);
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

exports.makeSuccessJson = makeSuccessJson;
exports.app = app;
exports.onListen = onListen;
exports.server = server;
/* app Not a pure module */
