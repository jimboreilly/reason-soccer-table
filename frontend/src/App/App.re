type state =
  | LoadingTable
  | ErrorFetchingTable
  | LoadedTable(array(Shared__TeamRecord.t));

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => LoadingTable);

  React.useEffect0(() => {
    Js.Promise.(
      Fetch.fetch("http://localhost:5000/")
      |> then_(Fetch.Response.json)
      |> then_(json => {
           let table = json |> Shared__TeamRecord.Decode.ts;
           setState(_previousState => LoadedTable(table));
           Js.Promise.resolve();
         })
      |> catch(err => {
           Js.log(err);
           setState(_previousState =>
             LoadedTable(Shared__TeamRecord.tExample)
           );
           Js.Promise.resolve();
         })
      |> ignore
    );

    None;
  });

  switch (state) {
  | LoadingTable => React.string("Loading...")
  | ErrorFetchingTable => React.string("An error occurred!")
  | LoadedTable(table) => <Table records=table />
  };
};
