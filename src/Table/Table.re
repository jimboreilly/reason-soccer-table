module Header = {
  [@react.component]
  let make = () => {
    let style =
      ReactDOMRe.Style.make(
        ~fontWeight="normal",
        ~padding="0px 10px 10px 10px",
        (),
      );

    <tr>
      {["", "Club", "P", "W", "D", "L", "Pts", "GF", "GA", "GD"]
       |> List.map(headerName => <th style> {React.string(headerName)} </th>)
       |> Array.of_list
       |> ReasonReact.array}
    </tr>;
  };
};

module RecordRow = {
  let calculatePoints = (r: TeamRecord.t) => 3 * r.wins + r.draws;

  let style = ReactDOMRe.Style.make(~padding="10px", ());
  let leftAligned =
    ReactDOMRe.Style.combine(
      style,
      ReactDOMRe.Style.make(~textAlign="left", ()),
    );
  let bold =
    ReactDOMRe.Style.combine(
      style,
      ReactDOMRe.Style.make(~fontWeight="bold", ()),
    );

  type state = {hover: bool};

  type action =
    | Enter
    | Leave;

  let initialState = {hover: false};

  let reducer = (_state, action) => {
    switch (action) {
    | Enter => {hover: true}
    | Leave => {hover: false}
    };
  };

  [@react.component]
  let make = (~position, ~r: TeamRecord.t) => {
    let (state, dispatch) = React.useReducer(reducer, initialState);

    let selectedRowStyle =
      if (state.hover) {
        ReactDOMRe.Style.make(
          ~backgroundColor="rgba(0,0,0,0.2)",
          ~transition="background-color 0.5s",
          (),
        );
      } else {
        ReactDOMRe.Style.make(
          ~backgroundColor="white",
          ~transition="background-color  0.75s",
          (),
        );
      };

    <tr
      style=selectedRowStyle
      onMouseEnter={_event => dispatch(Enter)}
      onMouseLeave={_event => dispatch(Leave)}>
      {[
         (string_of_int(position + 1), style),
         (r.name, leftAligned),
         (string_of_int(r.wins + r.draws + r.losses), style),
         (string_of_int(r.wins), style),
         (string_of_int(r.draws), style),
         (string_of_int(r.losses), style),
         (string_of_int(calculatePoints(r)), bold),
         (string_of_int(r.goalsFor), style),
         (string_of_int(r.goalsAgainst), style),
         (string_of_int(r.goalsFor - r.goalsAgainst), style),
       ]
       |> List.map(((v, style)) => <td style> {React.string(v)} </td>)
       |> Array.of_list
       |> ReasonReact.array}
    </tr>;
  };
};

module Record = {
  let rowWithSeparater = (position, r: TeamRecord.t) => {
    let separatingRow =
      ReactDOMRe.Style.make(~borderTop="1px rgba(0, 0, 0, 0.2) solid", ());
    ReactDOMRe.createElement(
      ReasonReact.fragment,
      [|<tr style=separatingRow />, <RecordRow position r />|],
    );
  };

  [@react.component]
  let make = (~position: int, ~r: TeamRecord.t) => {
    switch (position) {
    | 0 => <RecordRow position r />
    | _ => rowWithSeparater(position, r)
    };
  };
};

[@react.component]
let make = (~records) => {
  let tableStyle =
    ReactDOMRe.Style.make(
      ~backgroundColor="white",
      ~borderCollapse="collapse",
      ~margin="0 auto",
      ~padding="100px 0px",
      ~textAlign="center",
      ~width="100%",
      (),
    );

  let containerStyle =
    ReactDOMRe.Style.make(
      ~alignItems="center",
      ~backgroundColor="white",
      ~borderRadius="15px",
      ~padding="15px 0px 15px 0px",
      ~width="700px",
      (),
    );

  <div style=containerStyle>
    <table style=tableStyle>
      <Header />
      {records
       |> List.mapi((position, r) => <Record position r />)
       |> Array.of_list
       |> ReasonReact.array}
    </table>
  </div>;
};
