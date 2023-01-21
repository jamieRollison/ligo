import { Client } from 'pg';

import { DATABASE_URL } from '../../../auth.config';

export const queryTest = async () => {
	console.log('happening');
	const client = new Client({
		connectionString: DATABASE_URL
	});
	try {
		await client.connect();
		const res = await client.query('SELECT * FROM events');
		await client.end();
		return res;
	} catch (e) {
		console.log(e);
	}
};

export default queryTest;
