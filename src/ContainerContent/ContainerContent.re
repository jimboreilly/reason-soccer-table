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
