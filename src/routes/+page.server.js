import { getAllEvents } from '$lib/api/get.js';
import { events } from '$lib/stores/events';

export async function load() {
  const allEvents = await getAllEvents();
  events.set(allEvents)
  return {
    events: allEvents,
  }
}