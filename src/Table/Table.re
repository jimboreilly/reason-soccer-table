module Header = {
  [@react.component]
  let make = () => {
    let style =
      ReactDOMRe.Style.make(
        ~fontWeight="normal",
        ~textAlign="center",
        ~padding="20px 10px 10px 10px",
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

module Record = {
  let calculatePoints = (r: TeamRecord.t) => 3 * r.wins + r.draws;

  let style = ReactDOMRe.Style.make(~textAlign="center", ~padding="10px", ());
  let bold =
    ReactDOMRe.Style.combine(
      style,
      ReactDOMRe.Style.make(~fontWeight="bold", ()),
    );

  let recordRow = (position, r: TeamRecord.t) => {
    <tr>
      {[
         (string_of_int(position + 1), style),
         (r.name, style),
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
