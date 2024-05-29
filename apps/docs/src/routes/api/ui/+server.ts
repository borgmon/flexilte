import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import fs from 'fs';

export const GET: RequestHandler = ({}) => {
	const layoutConfig = fs.readFileSync('test.json').toString();

	return json(JSON.parse(layoutConfig));
};
