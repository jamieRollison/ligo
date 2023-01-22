import { getEvent } from '$lib/api/get.js';
import { events } from '$lib/stores/events'

export async function load({ params }) {
  console.log(params)
  return {
    event: params.event_id
  }
}