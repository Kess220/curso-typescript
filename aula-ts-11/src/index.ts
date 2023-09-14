import express, { Request, Response, json } from "express";
import { Game } from "./protocols/game-protocol";
import gamesService from "./service/games-service";
import httpStatus from "http-status";

const app = express();
app.use(json());

app.post("/games", async (req: Request, res: Response) => {
  const body = req.body as Game;
  try {
    await gamesService.createGame(body);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.error(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
});

app.get("/games", async (req: Request, res: Response) => {
  try {
    const games = await gamesService.getGames();
    res.send(games);
  } catch (error) {
    console.error(error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
});

app.listen(5000, () => console.log(`Server is up and running on port 5000`));
