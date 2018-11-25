import * as dotenv from 'dotenv';

dotenv.config();
let path;

switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}

dotenv.config({ path: path });

export const DB_URI = process.env.DB_URI;
