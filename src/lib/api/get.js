import * as db from '$lib/db/db.js';

/**
 * @param {string} event_id
 */
export async function getEvent(event_id) {
  const events = await db.get('events', '_id', event_id);
  return events[0];
}

export async function getAllEvents() {
  return await db.get('events', '', '');
}