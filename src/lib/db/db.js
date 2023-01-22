import { Client } from 'pg';
import { DATABASE_URL } from './dbconfig';

/**
 * @param {string} event_id
 */
export async function get(event_id) {
  const db = new Client({
    connectionString: DATABASE_URL,
  });
  try {
    db.connect();
    const query = `SELECT * FROM events WHERE id = '${event_id}'`;
    console.log(query);
    const result = await db.query(query);
    db.end();
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param {string} table
 * @param {{ name: any; location: any; date: any; attendance: number; score: number; carbon: number; }} data
 */
export function post(table, data) {
  console.log('data', data);
  const db = new Client({
    connectionString: DATABASE_URL,
  });
  const query = `INSERT INTO ${table} VALUES (${data})`;
  console.log(query);
  // try {
  //   db.connect();
  //   const result = db.query(query);
  //   db.end();
  //   return result;
  // } catch (error) {
  //   console.log(error);
  // }
}
  