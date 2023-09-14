import { Game } from "../protocols/game-protocol";
import gamesRepository from "../repository/games-repository";

async function getGames(): Promise<Game[]> {
  try {
    return await gamesRepository.getGames();
  } catch (error) {
    throw error;
  }
}

async function createGame(game: Game): Promise<void> {
  try {
    if (await gameAlreadyExists(game)) {
      throw { message: "Game already exists" };
    }

    await gamesRepository.createGame(game);
  } catch (error) {
    throw error;
  }
}

async function gameAlreadyExists(game: Game): Promise<boolean> {
  try {
    const result = await gamesRepository.getGameByTitleAndPlatform(game);
    return result ? true : false;
  } catch (error) {
    throw error;
  }
}

const gamesService = {
  getGames,
  createGame,
};

export default gamesService;
