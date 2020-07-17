open DotNetEnv
open FSharp.Data
open Giraffe
open Newtonsoft.Json
open Saturn
open System
open System.IO;
open Microsoft.AspNetCore.Cors.Infrastructure

DotNetEnv.Env.Load()

type TableRecord = {
  Name: string;
  CrestUrl: string;
  Played: string;
  Wins: string;
  Draws: string;
  Losses: string;
  Points: string;
  GoalsFor: string;
  GoalsAgainst: string;
  GoalDifferential: string;
}

type Team = {
  Id: int;
  Name: string;
  CrestUrl: string;
};

type TeamStanding = {
  Team: Team;
  PlayedGames: int;
  Won: int;
  Draw: int;
  Lost: int;
  Points: int;
  GoalsFor: int;
  GoalsAgainst: int;
  GoalDifference: int;
};

type Standings = {
    [<JsonIgnore>]  
    Stage: string;
    [<JsonIgnore>]  
    Type: string;
    [<JsonIgnore>]   
    Group: obj;
    Table: TeamStanding list;
}

type CompetitionInfo = {
    [<JsonIgnore>]   
    Filters: obj;
    [<JsonIgnore>]  
    Competition: obj;
    [<JsonIgnore>]  
    Season: obj;
    Standings: Standings list;
}

let host = "https://api.football-data.org/v2/competitions/2021/standings?standingType=TOTAL";

let signGoalDifference diff = 
    match diff with
    | positiveGd when diff > 0 -> sprintf "+%i" positiveGd
    | negativeGd when diff < 0 -> sprintf "-%i" negativeGd
    | _ -> "0"

let tableFromApiResponse (response:CompetitionInfo) =
    response.Standings.Head.Table
    |> List.map(fun teamResult -> 
    {
        Name= teamResult.Team.Name;
        CrestUrl= teamResult.Team.CrestUrl;
        Played= string teamResult.PlayedGames;
        Wins= string teamResult.Won;
        Draws= string teamResult.Draw;
        Losses= string teamResult.Lost;
        Points= string teamResult.Points;
        GoalsFor= string teamResult.GoalsFor;
        GoalsAgainst= string teamResult.GoalsAgainst;
        GoalDifferential= signGoalDifference teamResult.GoalDifference;
    })


let getTable (token) = 
    let json = 
        match token with
            | Some t ->
                Http.RequestString
                    (host, 
                    headers= [ "X-Auth-Token", t])
            | None ->
                File.ReadAllText @".\table.json"
    json
    |> JsonConvert.DeserializeObject<CompetitionInfo>
    |> tableFromApiResponse

let getAuthToken () =
    let token = Environment.GetEnvironmentVariable("token")
    if String.IsNullOrEmpty token then
        None
    else
        Some(token)

let tableController = controller {
    index (fun ctx -> (getAuthToken () |> getTable |> Controller.json ctx))
}

let tableRouter = router {
    get "/" tableController
}

let configureCors (builder: CorsPolicyBuilder) =
    builder.WithOrigins("http://localhost:8000")
        .AllowAnyMethod()
        .AllowAnyHeader()
    |> ignore

let app = application {
    use_router tableRouter
    use_cors "localhost:8000" configureCors
}

run app