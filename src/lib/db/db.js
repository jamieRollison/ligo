// import { Client } from 'pg';
// import { mongo } from './dbconfig';
import { MongoClient, ObjectId } from 'mongodb';


/**
 * @param {string} collection
 * @param {string} param
 * @param {any} value
 */
export async function get(collection, param, value) {
  const client = new MongoClient(process.env.mongo);
  await client.connect();
  if (param === '_id') {
    console.log('value', value);
    const ob_id = new ObjectId(value)
    const result = await (await client.db('ligo').collection(collection).find({"_id": ob_id})).map((event) => {
      // @ts-ignore
      event._id = event._id.toString()
      return event;
    })
    // console.log(result);
    return result;
  } else if (param === '') {
    const result = await (await client.db('ligo').collection(collection).find({}).toArray()).map((event) => {
      // @ts-ignore
      event._id = event._id.toString()
      return event;
    });
    return result;
  } else {
    const result = await (await client.db('ligo').collection(collection).find({[param] : value}).toArray()).map((event) => {
      // @ts-ignore
      event._id = event._id.toString();
      return event;
    });
    return result;
  }
}

/**
 * @param {string} collection
 * @param {any} data
 */
export async function post(collection, data) {
  console.log(collection, data);
  const client = new MongoClient(process.env.mongo);
  await client.connect();
  const result = await client.db('ligo').collection(collection).insertOne(data);
  console.log(result);
  await client.close();
  return result;
}
  