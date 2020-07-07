[@react.component]
let make = (~title) => {
  let style =
    ReactDOMRe.Style.make(
      ~borderRadius="12px 12px 0px 0px;",
      ~padding="12px;",
      ~fontWeight="bold;",
      (),
    );

  <div style> {React.string(title)} </div>;
};
