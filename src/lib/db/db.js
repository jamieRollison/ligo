import { Client } from 'pg';
import { DATABASE_URL } from './dbconfig';
import { v4 as uuidv4 } from 'uuid';

/**
 * @param {string} event_id
 */
export async function get(event_id) {
  const client = new Client(DATABASE_URL);
  try {
    client.connect();
    const query = event_id? `SELECT * FROM events WHERE id = '${event_id}'` : `SELECT * FROM events`;
    const result = await client.query(query);
    client.end();
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param {string} table
 * @param {{ name: any; location: any; start_date: any; attendance: number; score: number; carbon: number; }} data
 */
export function post(table, data) {
  const client = new Client(process.env.DATABASE_URL);
  const values = `'${uuidv4()}', '${data.name}', '${data.location}', '${data.start_date}', ${data.attendance}, ${data.score}, ${data.carbon}`;
  const query = `INSERT INTO ${table} VALUES (${values})})`;
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
  