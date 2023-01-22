import { getAllEvents } from '$lib/api/get.js';
import { events } from '$lib/stores/events';

export async function load() {
  // events.set(await getAllEvents());
}