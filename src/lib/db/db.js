// import { Client } from 'pg';
import { mongo, DATABASE_URL } from './dbconfig';
import { v4 as uuidv4 } from 'uuid';
import { MongoClient } from 'mongodb';


/**
 * @param {string} collection
 * @param {string} param
 * @param {any} value
 */
export async function get(collection, param, value) {
  // console.log(DATABASE_URL)
  // const client = new Client(DATABASE_URL);
  // try {
  //   client.connect();
  //   const query = event_id? `SELECT * FROM events WHERE id = '${event_id}'` : `SELECT * FROM events`;
  //   const result = await client.query(query);
  //   client.end();
  //   return result.rows;
  // } catch (error) {
  //   console.log(error);
  // }

  const client = new MongoClient(mongo);
  await client.connect();
  if (param === '') {
    const result = await (await client.db('ligo').collection(collection).find({}).toArray()).map((event) => {
      // @ts-ignore
      event._id = event._id.toString();
      return event;
    });
    return result
  } else {
    const result = await client.db('ligo').collection(collection).find({ [param]: value }).toArray();
    await client.close();
    return JSON.stringify(result);
  }
}

/**
 * @param {string} collection
 * @param {{ name: any; location: any; start_date: any; attendance: number; score: number; carbon: number; }} data
 */
export async function post(collection, data) {
  const client = new MongoClient(mongo);
  await client.connect();
  const result = await client.db('lingo').collection(collection).insertOne(data);
  await client.close();
  return result;

  // const client = new Client(process.env.DATABASE_URL);
  // const values = `'${uuidv4()}', '${data.name}', '${data.location}', '${data.start_date}', ${data.attendance}, ${data.score}, ${data.carbon}`;
  // const query = `INSERT INTO ${table} VALUES (${values})})`;
  // console.log(query);
  // try {
  //   db.connect();
  //   const result = db.query(query);
  //   db.end();
  //   return result;
  // } catch (error) {
  //   console.log(error);
  // }
}
  