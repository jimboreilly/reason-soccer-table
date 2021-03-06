'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function t(json) {
  return {
          name: Json_decode.field("name", Json_decode.string, json),
          crestUrl: Json_decode.field("crestUrl", Json_decode.string, json),
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

var tExample = [
  {
    name: "Liverpool FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    played: "36",
    wins: "30",
    draws: "3",
    losses: "3",
    points: "93",
    goalsFor: "77",
    goalsAgainst: "29",
    goalDifferential: "+48"
  },
  {
    name: "Manchester City FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    played: "36",
    wins: "24",
    draws: "3",
    losses: "9",
    points: "75",
    goalsFor: "93",
    goalsAgainst: "35",
    goalDifferential: "+58"
  },
  {
    name: "Chelsea FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    played: "36",
    wins: "19",
    draws: "6",
    losses: "11",
    points: "63",
    goalsFor: "64",
    goalsAgainst: "49",
    goalDifferential: "+15"
  },
  {
    name: "Leicester City FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
    played: "36",
    wins: "18",
    draws: "8",
    losses: "10",
    points: "62",
    goalsFor: "67",
    goalsAgainst: "36",
    goalDifferential: "+31"
  },
  {
    name: "Manchester United FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    played: "36",
    wins: "17",
    draws: "11",
    losses: "8",
    points: "62",
    goalsFor: "63",
    goalsAgainst: "35",
    goalDifferential: "+28"
  },
  {
    name: "Wolverhampton Wanderers FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
    played: "36",
    wins: "14",
    draws: "14",
    losses: "8",
    points: "56",
    goalsFor: "49",
    goalsAgainst: "38",
    goalDifferential: "+11"
  },
  {
    name: "Tottenham Hotspur FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    played: "36",
    wins: "15",
    draws: "10",
    losses: "11",
    points: "55",
    goalsFor: "57",
    goalsAgainst: "46",
    goalDifferential: "+11"
  },
  {
    name: "Sheffield United FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg",
    played: "36",
    wins: "14",
    draws: "12",
    losses: "10",
    points: "54",
    goalsFor: "38",
    goalsAgainst: "35",
    goalDifferential: "+3"
  },
  {
    name: "Arsenal FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    played: "36",
    wins: "13",
    draws: "14",
    losses: "9",
    points: "53",
    goalsFor: "53",
    goalsAgainst: "45",
    goalDifferential: "+8"
  },
  {
    name: "Burnley FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/Burnley_F.C._Logo.svg",
    played: "36",
    wins: "14",
    draws: "9",
    losses: "13",
    points: "51",
    goalsFor: "40",
    goalsAgainst: "48",
    goalDifferential: "-8"
  },
  {
    name: "Everton FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
    played: "36",
    wins: "12",
    draws: "10",
    losses: "14",
    points: "46",
    goalsFor: "42",
    goalsAgainst: "53",
    goalDifferential: "-11"
  },
  {
    name: "Southampton FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
    played: "36",
    wins: "13",
    draws: "7",
    losses: "16",
    points: "46",
    goalsFor: "46",
    goalsAgainst: "59",
    goalDifferential: "-13"
  },
  {
    name: "Newcastle United FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
    played: "36",
    wins: "11",
    draws: "10",
    losses: "15",
    points: "43",
    goalsFor: "37",
    goalsAgainst: "55",
    goalDifferential: "-18"
  },
  {
    name: "Crystal Palace FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Crystal_Palace_FC_logo.svg",
    played: "36",
    wins: "11",
    draws: "9",
    losses: "16",
    points: "42",
    goalsFor: "30",
    goalsAgainst: "47",
    goalDifferential: "-17"
  },
  {
    name: "West Ham United FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
    played: "36",
    wins: "10",
    draws: "7",
    losses: "19",
    points: "37",
    goalsFor: "47",
    goalsAgainst: "60",
    goalDifferential: "-13"
  },
  {
    name: "Brighton & Hove Albion FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
    played: "36",
    wins: "8",
    draws: "13",
    losses: "15",
    points: "37",
    goalsFor: "37",
    goalsAgainst: "53",
    goalDifferential: "-16"
  },
  {
    name: "Watford FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg",
    played: "36",
    wins: "8",
    draws: "10",
    losses: "18",
    points: "34",
    goalsFor: "34",
    goalsAgainst: "57",
    goalDifferential: "-23"
  },
  {
    name: "AFC Bournemouth",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg",
    played: "36",
    wins: "8",
    draws: "7",
    losses: "21",
    points: "31",
    goalsFor: "37",
    goalsAgainst: "62",
    goalDifferential: "-25"
  },
  {
    name: "Aston Villa FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
    played: "36",
    wins: "8",
    draws: "7",
    losses: "21",
    points: "31",
    goalsFor: "39",
    goalsAgainst: "66",
    goalDifferential: "-27"
  },
  {
    name: "Norwich City FC",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/Norwich_City.svg",
    played: "36",
    wins: "5",
    draws: "6",
    losses: "25",
    points: "21",
    goalsFor: "26",
    goalsAgainst: "68",
    goalDifferential: "-42"
  }
];

exports.Decode = Decode;
exports.tExample = tExample;
/* No side effect */
