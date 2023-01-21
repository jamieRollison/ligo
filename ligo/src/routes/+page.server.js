import { getEvents } from '$lib/server/database.js';
import { events } from '$lib/event.store.js';

export const load = async () => {
  return {
    events: await getEvents()
  };
}