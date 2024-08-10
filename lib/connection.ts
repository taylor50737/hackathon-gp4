import mongoose from 'mongoose';
import Logging from '@/logging/logging';
import { config } from './config';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDb() {
  try {
    // Use existing connection if a connection already created
    if (cached.conn) {
      return cached.conn;
    }

    // Create new connection
    cached.promise = mongoose.connect(config.mongo.uri, {
      retryWrites: true,
      w: 'majority',
      maxPoolSize: 10,
      minPoolSize: 1,
      socketTimeoutMS: 20000,
      serverSelectionTimeoutMS: 20000,
      maxIdleTimeMS: 20000,
    });

    cached.conn = await cached.promise;

    Logging.info('Connected to MongoDB successfully.');
    return cached.conn;
  } catch (error) {
    Logging.error(`Error connecting to MongoDB: ${error}`);
    throw new Error('Database connection failed.');
  }
}

export function disconnectDb() {
  if (!cached.conn) {
    return;
  }
  cached.conn = null;
  mongoose.disconnect();
  Logging.info('Database connection closed.');
}
