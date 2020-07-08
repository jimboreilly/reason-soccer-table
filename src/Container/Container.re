module Title = {
  [@react.component]
  let make = (~title) => {
    let style =
      ReactDOMRe.Style.make(
        ~borderRadius="12px 12px 0px 0px",
        ~padding="12px",
        ~fontWeight="bold",
        (),
      );

    <div style> {React.string(title)} </div>;
  };
};

module Content = {
  [@react.component]
  let make = (~children) => {
    let style =
      ReactDOMRe.Style.make(
        ~backgroundColor="white",
        ~padding="16px",
        ~borderRadius="0px 0px 12px 12px",
        (),
      );

    <div style> children </div>;
  };
};

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

  <div style> <Title title /> <Content> children </Content> </div>;
};
