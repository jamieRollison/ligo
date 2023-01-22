import { writable } from "svelte/store";

export const events = writable([]);
export const current_event = writable({});