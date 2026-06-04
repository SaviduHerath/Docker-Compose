import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';
import {connectDB } from './config/db.js';

const app = express();
const PORT = 4000;


//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

app.use('/api/users', userRouter);


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
}); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});