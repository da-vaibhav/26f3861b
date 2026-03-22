import { env } from "@26f3861b-5297-4e7c-92fa-6d4e397ff7fe/env/server";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

export const db = drizzle(env.DATABASE_URL, { schema });
