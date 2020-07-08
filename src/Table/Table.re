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
  let boldStyle =
    ReactDOMRe.Style.make(~fontWeight="bold", ~textAlign="right", ());
  <tr>
    <td style> {React.string(string_of_int(position + 1))} </td>
    <td> {React.string(r.name)} </td>
    <td style>
      {React.string(string_of_int(r.wins + r.draws + r.losses))}
    </td>
    <td style> {React.string(string_of_int(r.wins))} </td>
    <td style> {React.string(string_of_int(r.draws))} </td>
    <td style> {React.string(string_of_int(r.losses))} </td>
    <td style=boldStyle>
      {React.string(string_of_int(calculatePoints(r)))}
    </td>
    <td style> {React.string(string_of_int(r.goalsFor))} </td>
    <td style> {React.string(string_of_int(r.goalsAgainst))} </td>
    <td style>
      {React.string(string_of_int(r.goalsFor - r.goalsAgainst))}
    </td>
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
