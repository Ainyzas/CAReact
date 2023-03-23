import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const { MONGO_URI } = process.env;

export function mongoConnector() {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log(`Connected to Mongo Database`))
    .catch((error) => console.log(error.message));
}
