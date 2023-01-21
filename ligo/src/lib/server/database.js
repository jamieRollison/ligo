import { Client } from 'pg';
import { DATABASE_URL } from '../../../auth.config';

const getEvents = async () => {
	const client = new Client({
		connectionString: DATABASE_URL
	});
	try {
		await client.connect();
		const res = await client.query('SELECT * FROM events');
		await client.end();
    return res.rows;
	} catch (e) {
		console.log(e);
	}
};

export { getEvents };
