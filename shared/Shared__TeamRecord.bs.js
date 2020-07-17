'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function t(json) {
  return {
          name: Json_decode.field("name", Json_decode.string, json),
          played: Json_decode.field("played", Json_decode.string, json),
          wins: Json_decode.field("wins", Json_decode.string, json),
          draws: Json_decode.field("draws", Json_decode.string, json),
          losses: Json_decode.field("losses", Json_decode.string, json),
          points: Json_decode.field("points", Json_decode.string, json),
          goalsFor: Json_decode.field("goalsFor", Json_decode.string, json),
          goalsAgainst: Json_decode.field("goalsAgainst", Json_decode.string, json),
          goalDifferential: Json_decode.field("goalDifferential", Json_decode.string, json)
        };
}

function ts(json) {
  return Json_decode.array(t, json);
}

var Decode = {
  t: t,
  ts: ts
};

exports.Decode = Decode;
/* No side effect */
