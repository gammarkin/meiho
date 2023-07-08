import mongoose from 'mongoose';
import 'dotenv/config';
/* eslint-disable no-console */

const { MONGO_DB_URL } = process.env;

if (!MONGO_DB_URL) {
  console.log('MONGO DB URL not captured');
  process.exit(1);
}
mongoose.set('strictQuery', true);

const connectToDatabase = () => mongoose.connect(MONGO_DB_URL);

export default connectToDatabase;