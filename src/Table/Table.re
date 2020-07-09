module Header = {
  [@react.component]
  let make = () => {
    let style =
      ReactDOMRe.Style.make(~fontWeight="normal", ~textAlign="center", ());

    <tr>
      {["", "Club", "P", "W", "D", "L", "Pts", "GF", "GA", "GD"]
       |> List.map(headerName => <th style> {React.string(headerName)} </th>)
       |> Array.of_list
       |> ReasonReact.array}
    </tr>;
  };
};

module Record = {
  let calculatePoints = (r: TeamRecord.t) => 3 * r.wins + r.draws;

  let normalStyle =
    ReactDOMRe.Style.make(
      ~textAlign="right",
      ~padding="2px 20px 10px 10px",
      (),
    );
  let boldStyle =
    ReactDOMRe.Style.make(~fontWeight="bold", ~textAlign="right", ());

  let recordRow = (position, r: TeamRecord.t) => {
    <tr>
      {[
         (string_of_int(position + 1), normalStyle),
         (r.name, normalStyle),
         (string_of_int(r.wins + r.draws + r.losses), normalStyle),
         (string_of_int(r.wins), normalStyle),
         (string_of_int(r.draws), normalStyle),
         (string_of_int(r.losses), normalStyle),
         (string_of_int(calculatePoints(r)), boldStyle),
         (string_of_int(r.goalsFor), normalStyle),
         (string_of_int(r.goalsAgainst), normalStyle),
         (string_of_int(r.goalsFor - r.goalsAgainst), normalStyle),
       ]
       |> List.map(((v, style)) => <td style> {React.string(v)} </td>)
       |> Array.of_list
       |> ReasonReact.array}
    </tr>;
  };

  let separatingRow =
    ReactDOMRe.Style.make(
      ~borderTop="1px rgba(0, 0, 0, 0.2) solid",
      ~padding="0px 0px -20px -20px",
      ~marginLeft="-20%",
      (),
    );

  let rowWithSeparater = (position, r: TeamRecord.t) =>
    ReactDOMRe.createElement(
      ReasonReact.fragment,
      [|<tr style=separatingRow />, recordRow(position, r)|],
    );

  [@react.component]
  let make = (~position: int, ~r: TeamRecord.t) => {
    switch (position) {
    | 0 => recordRow(position, r)
    | _ => rowWithSeparater(position, r)
    };
  };
};

[@react.component]
let make = (~records) => {
  let style =
    ReactDOMRe.Style.make(
      ~backgroundColor="white",
      ~borderCollapse="collapse",
      ~margin="0 auto",
      ~padding="100px 0px",
      ~width="95%",
      (),
    );

  let containerStyle =
    ReactDOMRe.Style.make(
      ~alignItems="center",
      ~backgroundColor="white",
      ~borderRadius="15px",
      ~width="700px",
      (),
    );

  <div style=containerStyle>
    <table style>
      <Header />
      {records
       |> List.mapi((position, r) => <Record position r />)
       |> Array.of_list
       |> ReasonReact.array}
    </table>
  </div>;
};
