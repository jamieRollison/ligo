import { queryTest } from '$lib/server/database';

export const actions = {
	default: async () => {
		console.log('action');
		const res = await queryTest();
		if (res) console.log(res.rows);
	}
};
