type t = {
  name: string,
  played: string,
  wins: string,
  draws: string,
  losses: string,
  points: string,
  goalsFor: string,
  goalsAgainst: string,
  goalDifferential: string,
};

module Decode = {
  let t = json =>
    Json.Decode.{
      name: json |> field("name", string),
      played: json |> field("played", string),
      wins: json |> field("wins", string),
      draws: json |> field("draws", string),
      losses: json |> field("losses", string),
      points: json |> field("points", string),
      goalsFor: json |> field("goalsFor", string),
      goalsAgainst: json |> field("goalsAgainst", string),
      goalDifferential: json |> field("goalDifferential", string),
    };

  let ts = json => Json.Decode.(json |> array(t));
};
