let tableHeader = () =>
  <tr>
    <th />
    <th> {React.string("Name")} </th>
    <th> {React.string("Matches")} </th>
    <th> {React.string("Wins")} </th>
    <th> {React.string("Draws")} </th>
    <th> {React.string("Losses")} </th>
    <th> {React.string("Pts")} </th>
    <th> {React.string("GF")} </th>
    <th> {React.string("GA")} </th>
    <th> {React.string("GD")} </th>
  </tr>;

let calculatePoints = (r: TeamRecord.t) => 3 * r.wins + r.draws;

let formatRecordRow = (position, r: TeamRecord.t) =>
  <tr>
    <td> {React.string(string_of_int(position + 1))} </td>
    <td> {React.string(r.name)} </td>
    <td> {React.string(string_of_int(r.wins + r.draws + r.losses))} </td>
    <td> {React.string(string_of_int(r.wins))} </td>
    <td> {React.string(string_of_int(r.draws))} </td>
    <td> {React.string(string_of_int(r.losses))} </td>
    <td> {React.string(string_of_int(calculatePoints(r)))} </td>
    <td> {React.string(string_of_int(r.goalsFor))} </td>
    <td> {React.string(string_of_int(r.goalsAgainst))} </td>
    <td> {React.string(string_of_int(r.goalsFor - r.goalsAgainst))} </td>
  </tr>;

[@react.component]
let make = (~records) => {
  <div>
    <table>
      {tableHeader()}
      {records
       |> List.mapi(formatRecordRow)
       |> Array.of_list
       |> ReasonReact.array}
    </table>
  </div>;
};
