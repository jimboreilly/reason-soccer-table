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
