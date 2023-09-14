import { Pool } from "pg";

const pool = new Pool({
  user: "seu_usuario",
  host: "localhost",
  database: "seu_banco_de_dados",
  password: "sua_senha",
  port: 5432, // Porta padrão do PostgreSQL
});

export default pool;
