export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [4],
	"/add_event": [5],
	"/add_event/attendee": [6],
	"/add_event/organizer": [7],
	"/how_it_works": [8],
	"/[event_id]_info_page": [3]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};