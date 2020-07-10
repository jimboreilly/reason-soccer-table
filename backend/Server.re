open Express;

let makeSuccessJson = () => {
  let json = Js.Dict.empty();
  Js.Dict.set(json, "success", Js.Json.boolean(true));
  Js.Json.object_(json);
};

let app = express();

App.get(app, ~path="/") @@
Middleware.from((next, req) =>
  switch (Request.baseUrl(req)) {
  | "" => Response.sendJson(makeSuccessJson())
  | _ => next(Next.route)
  }
);

//let calculatePoints = (r: Shared.TeamRecord.t) => 3 * r.wins + r.draws;

let tableStub: list(Shared__TeamRecord.t) = [
  {
    name: "Liverpool",
    played: "34",
    wins: "30",
    draws: "2",
    losses: "2",
    points: "92",
    goalsFor: "75",
    goalsAgainst: "26",
    goalDifferential: "+49",
  },
  {
    name: "Manchester City",
    played: "34",
    wins: "22",
    draws: "3",
    losses: "9",
    points: "69",
    goalsFor: "86",
    goalsAgainst: "34",
    goalDifferential: "+52",
  },
  {
    name: "Chelsea",
    played: "34",
    wins: "18",
    draws: "6",
    losses: "10",
    points: "60",
    goalsFor: "64",
    goalsAgainst: "46",
    goalDifferential: "+17",
  },
];

let tableJson = (records: list(Shared__TeamRecord.t)) => {
  records
  |> List.map((r: Shared__TeamRecord.t) => {
       let json = Js.Dict.empty();
       Js.Dict.set(json, "name", Js.Json.string(r.name));
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

App.get(app, ~path="/test") @@
Middleware.from((next, req) =>
  switch (Request.baseUrl(req)) {
  | "" => Response.sendJson(tableJson(tableStub))
  | _ => next(Next.route)
  }
);

let onListen = e =>
  switch (e) {
  | exception (Js.Exn.Error(e)) =>
    Js.log(e);
    Node.Process.exit(1);
  | _ => Js.log @@ "Listening at http://127.0.0.1:3000"
  };

let server = App.listen(app, ~port=3000, ~onListen, ());
