# reason-soccer-table

This is:
- A ReasonReact frontend
- A small F# backend server using Saturn
- A fully functional premier league table

The project is divided 3 primary folders:
- backend (server code)
- frontend (ReasonReact code)
- shared (types that were used in both frontend and unused ReasonML backend)

The frontend was bootstrapped with `bsb`'s react-hooks template for ReasonReact, the backend is just a dotnet core 3.1 CLI

## Install

### Frontend

install bs-platform
```
yarn global add bs-platform
```

install dependencies

```
yarn install
```

compile the ReasonML code to js using `bsb`

```
yarn start
```

in another tab start the frontend server
```
yarn run server
```

### Backend

create a `.env` file in the `/backend/` directory with your https://www.football-data.org/ API token (if the program doesn't find one, it just uses a stub response!)
```sh
# /backend/.env
token=<this is your token>
```

install dotnet 3.1 SDK

```
cd backend
dotnet run
```

