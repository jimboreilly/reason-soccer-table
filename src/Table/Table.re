/* let formatRecordRow = record:TeamRecord.t =>
   React.string(
   record.name
    ++ " wins: "
    ++ string_of_int(record.wins)
    ++ " draws: "
    ++ string_of_int(record.draws)
    ++ " losses: "
    ++ string_of_int(record.losses)); */

let formatRecordRow = (record: TeamRecord.t) =>
  <div>
    {React.string(
       record.name ++ " " ++ string_of_int(record.wins) ++ " wins",
     )}
  </div>;

[@react.component]
let make = (~records) => {
  <div>
    {records
     |> List.map(formatRecordRow)
     |> Array.of_list
     |> ReasonReact.array}
  </div>;
};
