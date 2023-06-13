import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectToDatabase from './db.js';
import createUser from './routes/CreateUser.js';
import { userController } from './controllers/userController.js';
const server = express();
const port = process.env.PORT;
const url = process.env.DB_URL;

// Middleware
server.use(cookieParser());
server.use(express.json());
server.use(cors())

// Connection to database
connectToDatabase(url);

server.use('/api', createUser);


server.get('/', (req, res) => {
  res.send('hello');
});

// Routes

// Start the server
server.listen(port, () => {
  console.log('Server started');
});
