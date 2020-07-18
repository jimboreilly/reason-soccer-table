open Express;

type team = {
  name: string,
  crestUrl: string,
};

type teamRecord = {
  team,
  playedGames: int,
  won: int,
  draw: int,
  lost: int,
  points: int,
  goalsFor: int,
  goalsAgainst: int,
  goalDifference: int,
};

type table = array(teamRecord);

//TODO: convert this entire proces to an encode defined in the shared types module
let tableStub: list(Shared__TeamRecord.t) = [
  {
    name: "Liverpool",
    crestUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    played: "34",
    wins: "30",
    draws: "2",
    losses: "2",
    points: "92",
    goalsFor: "75",
    goalsAgainst: "26",
    goalDifferential: "+49",
  },
];

let tableJson = (records: list(Shared__TeamRecord.t)) => {
  records
  |> List.map((r: Shared__TeamRecord.t) => {
       let json = Js.Dict.empty();
       Js.Dict.set(json, "name", Js.Json.string(r.name));
       Js.Dict.set(json, "crestUrl", Js.Json.string(r.crestUrl));
       Js.Dict.set(json, "played", Js.Json.string(r.played));
       Js.Dict.set(json, "wins", Js.Json.string(r.wins));
       Js.Dict.set(json, "draws", Js.Json.string(r.draws));
       Js.Dict.set(json, "losses", Js.Json.string(r.losses));
       Js.Dict.set(json, "points", Js.Json.string(r.points));
       Js.Dict.set(json, "goalsFor", Js.Json.string(r.goalsFor));
       Js.Dict.set(json, "goalsAgainst", Js.Json.string(r.goalsAgainst));
       Js.Dict.set(
         json,
         "goalDifferential",
         Js.Json.string(r.goalDifferential),
       );
       json;
     })
  |> Array.of_list
  |> Js.Json.objectArray;
};

let app = express();

App.get(app, ~path="/test") @@
Middleware.from((next, req) =>
  switch (Request.baseUrl(req)) {
  | "" => Response.sendJson(tableJson(tableStub))
  | _ => next(Next.route)
  }
);

/*
  To be figured out: All Fetch calls return a Js.Promise where processing the
  response is handled in the callback. Problem being the return result of the Middlewhere needs
  to match on all paths, need to essentially do a JS `await`. Solutions I've seen that handle this well
  compile to native, which I am not trying to do today.
 */

// App.get(app, ~path="/table") @@
// Middleware.from((next, req) =>
//   switch (Request.baseUrl(req)) {
//   | "" =>
//     let foo =
//       Js.Promise.(
//         Fetch.fetch("https://dog.ceo/api/breeds/image/random/3")
//         |> then_(response => Fetch.Response.ok(response) |> resolve)
//       );
//     ();

//   | _ => next(Next.route)
//   }
// );

let onListen = e =>
  switch (e) {
  | exception (Js.Exn.Error(e)) =>
    Js.log(e);
    Node.Process.exit(1);
  | _ => Js.log @@ "Listening at http://127.0.0.1:3000"
  };

let server = App.listen(app, ~port=3000, ~onListen, ());
