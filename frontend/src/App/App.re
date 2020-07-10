let tableStub: list(TeamRecord.t) = [
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
let make = () => {
  <div>
     <Table records=tableStub /> </div>;
    // </Container>
    //   <ReasonUsingJSUsingReason />
    // <Container title="Reason Using JS Using Reason">
    // </Container>
    //   <FetchedDogPictures />
    // <Container title="Fetched Dog Pictures">
    // </Container>
    //   <ReducerFromReactJSDocs />
    // <Container title="Reducer From ReactJS Docs">
    // </Container>
    //   <BlinkingGreeting> {React.string("Hello!")} </BlinkingGreeting>
    // <Container title="Blinking Greeting">
};
