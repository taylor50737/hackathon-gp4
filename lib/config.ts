import 'dotenv/config';

const ATLAS_USERNAME = process.env.ATLAS_USERNAME || '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD || '';
const ATLAS_CLUTSER = process.env.ATLAS_CLUTSER || '';
const ATLAS_DB = process.env.ATLAS_DB || '';
const ATLAS_URI = `mongodb+srv://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@${ATLAS_CLUTSER}.1sjdj9b.mongodb.net/${ATLAS_DB}`;

const SERVER_PORT = process.env.SERVER_PORT;

export const config = {
  mongo: {
    username: ATLAS_USERNAME,
    password: ATLAS_PASSWORD,
    uri: ATLAS_URI,
  },
  server: {
    port: SERVER_PORT,
  },
};
