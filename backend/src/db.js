import pg from "pg";
import env from "dotenv";

env.config();

const db = new pg.Client({
  user: 'postgres',  // Use postgres directly here for testing
  host: 'localhost',
  database: 'client_db',
  password: 'mydatabase',  // Ensure password is correct
  port: 5432,
});

db.connect();

db.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export const query = (text, params) => db.query(text, params);
