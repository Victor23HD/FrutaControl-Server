import express from "express";
import usersControllers from "../controllers/usersControllers.js";

const userRouter = express.Router();

userRouter
    .get('/users', usersControllers.listUsers)
    .post('/users', usersControllers. registerUsers)
    .post('/users/auth', usersControllers. checkLogin);


export default userRouter