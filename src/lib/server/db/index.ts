import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from "$env/dynamic/private";
import * as schema from './schema';
import { building } from '$app/environment';

const {
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB
} = env;

if (!building && (!POSTGRES_DB || !POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_USER || !POSTGRES_PASSWORD))
    throw new Error('Some env variable is not set');

const url = building 
    ? '' 
    : `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

const client = building ? ({} as any) : postgres(url);

export const db = drizzle(client, {schema});
