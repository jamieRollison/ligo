import { Client } from 'pg';
import { DATABASE_URL } from './dbconfig';
import { v4 as uuidv4 } from 'uuid';

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
 * @param {{ name: any; location: any; start_date: any; attendance: number; score: number; carbon: number; }} data
 */
export function post(table, data) {
  console.log('data', data);
  const db = new Client({
    connectionString: DATABASE_URL,
  });
  const values = `'${uuidv4()}', '${data.name}', '${data.location}', '${data.start_date}', ${data.attendance}, ${data.score}, ${data.carbon}`;
  console.log(values)
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
  