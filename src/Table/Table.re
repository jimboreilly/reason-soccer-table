let tableHeader = () => {
  let style = ReactDOMRe.Style.make(~fontWeight="normal", ());

  <tr>
    {[
       "",
       "Club",
       "Matches",
       "Wins",
       "Draws",
       "Losses",
       "Pts",
       "GF",
       "GA",
       "GD",
     ]
     |> List.map(headerName => <th style> {React.string(headerName)} </th>)
     |> Array.of_list
     |> ReasonReact.array}
  </tr>;
};

let calculatePoints = (r: TeamRecord.t) => 3 * r.wins + r.draws;

let transformRecordRow = (position, r: TeamRecord.t) => {
  let style = ReactDOMRe.Style.make(~textAlign="right", ());

  <tr>
    {[
       string_of_int(position + 1),
       r.name,
       string_of_int(r.wins + r.draws + r.losses),
       string_of_int(r.wins),
       string_of_int(r.draws),
       string_of_int(r.losses),
       string_of_int(calculatePoints(r)),
       string_of_int(r.goalsFor),
       string_of_int(r.goalsAgainst),
       string_of_int(r.goalsFor - r.goalsAgainst),
     ]
     |> List.map(value => <td style> {React.string(value)} </td>)
     |> Array.of_list
     |> ReasonReact.array}
  </tr>;
};

[@react.component]
let make = (~records) =>
  <div>
    <table>
      {tableHeader()}
      {records
       |> List.mapi(transformRecordRow)
       |> Array.of_list
       |> ReasonReact.array}
    </table>
  </div>;
