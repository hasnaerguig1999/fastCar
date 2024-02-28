import express from 'express';
import "express-async-errors"
import router from './routes';
import { errorMiddleware } from './middlewares/error';
import sequelize from './config/database';
import dotenv from 'dotenv';
const app = express();
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");


sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));
});