import pool from "../database/connection"; // Importe a conexão com o banco de dados
import { Game } from "../protocols/game-protocol";

async function getGames(): Promise<Game[]> {
  try {
    const query = "SELECT * FROM games";
    const result = await pool.query(query);
    return result.rows as Game[];
  } catch (error) {
    throw error;
  }
}

async function createGame(game: Game): Promise<void> {
  try {
    const { title, platform } = game;
    const query = "INSERT INTO games (title, platform) VALUES ($1, $2)";
    const values = [title, platform];
    await pool.query(query, values);
  } catch (error) {
    throw error;
  }
}

async function getGameByTitleAndPlatform(
  game: Game
): Promise<Game | undefined> {
  try {
    const { title, platform } = game;
    const query = "SELECT * FROM games WHERE title = $1 AND platform = $2";
    const values = [title, platform];
    const result = await pool.query(query, values);
    return result.rows[0] as Game | undefined;
  } catch (error) {
    throw error;
  }
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
