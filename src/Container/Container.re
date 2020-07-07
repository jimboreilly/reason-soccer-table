[@react.component]
let make = (~title, ~children) => {
  let style =
    ReactDOMRe.Style.make(
      ~margin="12px 0px",
      ~boxShadow="0px 4px 16px rgb(200, 200, 200)",
      ~width="720px",
      ~borderRadius="12px",
      ~fontFamily="sans-serif",
      (),
    );

  <div style>
    <Title title />
    <ContainerContent> children </ContainerContent>
  </div>;
};
