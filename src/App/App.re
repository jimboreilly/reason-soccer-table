[@react.component]
let make = () => {
  <div>
    <BlinkingGreeting> {React.string("Hello!")} </BlinkingGreeting>
    <ReducerFromReactJSDocs />
    <FetchedDogPictures />
    <ReasonUsingJSUsingReason />
    <ContainerTest title="test"> <Title title="also test" /> </ContainerTest>
  </div>;
};
