import express from "express";
import usersRouter from './routers/users.js';

const app = express();
const server =  app.listen(8080,()=>console.log("Listeninig Mock"))

app.use('/users',usersRouter);
