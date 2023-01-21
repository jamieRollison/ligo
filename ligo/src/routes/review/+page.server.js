import { getEvents } from '$lib/server/database';

export const actions = {
	default: async () => {
		console.log('action');
		const res = await getEvents();
	}
};
