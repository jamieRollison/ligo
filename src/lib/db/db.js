// import { Client } from 'pg';
import { mongo, DATABASE_URL } from './dbconfig';
import { MongoClient } from 'mongodb';


/**
 * @param {string} collection
 * @param {string} param
 * @param {any} value
 */
export async function get(collection, param, value) {
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
  console.log(collection, data);
  const client = new MongoClient(mongo);
  await client.connect();
  const result = await client.db('ligo').collection(collection).insertOne(data);
  console.log(result);
  await client.close();
  return result;
}
  