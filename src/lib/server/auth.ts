import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import {db} from "$lib/server/db";
import { env } from "$env/dynamic/private";
import { building } from '$app/environment';

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    emailAndPassword: {
        enabled: true
    },
    session: {
        expiresIn: 60 * 60 * 24 // 1 day
    },
    plugins: [
        admin({
            defaultRole: "user",
            adminRoles: ["admin"]
        })
    ],
    secret: env.BETTER_AUTH_SECRET || (building ? 'BUILD_TIME_SECRET' : undefined),
    baseURL: env.BASE_URL
});