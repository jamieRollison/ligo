import { getEvent } from '$lib/api/get.js';

export async function load({ params }) {
  return {
    event: await getEvent(params.event_id),
  }
}