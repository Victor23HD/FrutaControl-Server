import express from "express";
import usersControllers from "../controllers/usersControllers.js";

const userRouter = express.Router();

userRouter.
    get('/users/', usersControllers.listUsers);

export default userRouter