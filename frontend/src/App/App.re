let tableStub: list(Shared__TeamRecord.t) = [
  {
    name: "Liverpool",
    wins: 29,
    draws: 2,
    losses: 2,
    goalsFor: 72,
    goalsAgainst: 25,
  },
  {
    name: "Manchester City",
    wins: 21,
    draws: 3,
    losses: 9,
    goalsFor: 81,
    goalsAgainst: 34,
  },
  {
    name: "Chelsea",
    wins: 18,
    draws: 6,
    losses: 10,
    goalsFor: 63,
    goalsAgainst: 46,
  },
];

[@react.component]
let make = () => <Table records=tableStub />;
