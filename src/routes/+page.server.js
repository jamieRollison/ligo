import { getAllEvents } from '$lib/api/get.js';

export async function load() {
  return {
    events: await getAllEvents(),
  }
}