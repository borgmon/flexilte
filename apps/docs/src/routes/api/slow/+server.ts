import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({}) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return json({ text: 'meow' });
};
