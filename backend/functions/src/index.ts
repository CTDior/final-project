import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
// import exampleRoutes from './routes/example';

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/", exampleRoutes);

export const api = functions.https.onRequest(app);