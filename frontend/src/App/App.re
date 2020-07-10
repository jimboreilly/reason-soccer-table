let tableStub: list(Shared__TeamRecord.t) = [
  {
    name: "Liverpool",
    played: "34",
    wins: "30",
    draws: "2",
    losses: "2",
    points: "92",
    goalsFor: "75",
    goalsAgainst: "26",
    goalDifferential: "+49",
  },
  {
    name: "Manchester City",
    played: "34",
    wins: "22",
    draws: "3",
    losses: "9",
    points: "69",
    goalsFor: "86",
    goalsAgainst: "34",
    goalDifferential: "+52",
  },
  {
    name: "Chelsea",
    played: "34",
    wins: "18",
    draws: "6",
    losses: "10",
    points: "60",
    goalsFor: "64",
    goalsAgainst: "46",
    goalDifferential: "+17",
  },
];

[@react.component]
let make = () => <Table records=tableStub />;
