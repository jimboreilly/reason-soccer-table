type teamRecord = {
  name: string,
  wins: int,
  draws: int,
  losses: int,
  goalsFor: int,
  goalsAgainst: int,
};

let tableStub = [
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
    goalsAgainst: 56,
  },
];

[@react.component]
let make = () => {
  <div>
    <Container title="Blinking Greeting">
      <BlinkingGreeting> {React.string("Hello!")} </BlinkingGreeting>
    </Container>
    <Container title="Reducer From ReactJS Docs">
      <ReducerFromReactJSDocs />
    </Container>
    <Container title="Fetched Dog Pictures">
      <FetchedDogPictures />
    </Container>
    <Container title="Reason Using JS Using Reason">
      <ReasonUsingJSUsingReason />
    </Container>
  </div>;
};
