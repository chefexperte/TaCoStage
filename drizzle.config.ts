import { defineConfig } from 'drizzle-kit';

if (!process.env.POSTGRES_HOST) throw new Error('POSTGRES_HOST is not set');
if (!process.env.POSTGRES_PORT) throw new Error('POSTGRES_PORT is not set');
if (!process.env.POSTGRES_USER) throw new Error('POSTGRES_USER is not set');
if (!process.env.POSTGRES_PASSWORD) throw new Error('POSTGRES_PASSWORD is not set');
if (!process.env.POSTGRES_DB) throw new Error('POSTGRES_DB is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema/',
	dialect: 'postgresql',
	dbCredentials: {
		host: process.env.POSTGRES_HOST,
		port: parseInt(process.env.POSTGRES_PORT, 10),
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB
	},
	verbose: true,
	strict: true
});
