import { config } from 'dotenv';
config();

export const { PORT, ORIGIN, CREDENTIALS } = process.env;