import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoConnector } from './db/mongoConnector.js';
import router from './router/index.js';

dotenv.config();

const { PORT } = process.env || 3500;

mongoConnector();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
