import * as db from '$lib/db/db.js';

/**
 * @param {{ name: any; location: any; start_date: any; attendance: number; score: number; carbon: number; }} event
 */
export async function postEvent(event) {
  const response = await db.post('events', event);
  return response;
}