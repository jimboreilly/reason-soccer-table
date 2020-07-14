open DotNetEnv
open FSharp.Data
open Giraffe
open Newtonsoft.Json
open Saturn
open System

DotNetEnv.Env.Load()

type TableRecord = {
  Name: string;
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

let getTable () = 
    Http.RequestString
        (host, 
        headers= [ "X-Auth-Token", Environment.GetEnvironmentVariable("token")])
    |> JsonConvert.DeserializeObject<CompetitionInfo>

let tableController = controller {
    index (fun ctx -> (getTable()) |> Controller.json ctx)
}

let tableRouter = router {
    get "/" (json (getTable()))
}

let app = application {
    use_router tableRouter
}

run app