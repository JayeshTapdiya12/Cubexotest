import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './logger.js';

dotenv.config();

const database = async () => {
  try {
    const DATABASE =
      process.env.NODE_ENV === 'test'
        ? process.env.DATABASE_TEST
        : process.env.DATABASE;

    if (!DATABASE) {
      throw new Error(' Database connection string is not defined in .env');
    }

    await mongoose.connect(DATABASE);
    logger.info('✅ Successfully connected to MongoDB');
  } catch (error) {
    logger.error(` MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default database;
