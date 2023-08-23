import express from "express";
import usersControllers from "../controllers/usersControllers.js";

const userRouter = express.Router();

<<<<<<< Updated upstream
userRouter.
    get('/users/', usersControllers.listUsers);
=======
userRouter
    .get('/users', usersControllers.listUsers)
    .post('/users', usersControllers. registerUsers)
    .post('/users/auth', usersControllers. checkLogin);
>>>>>>> Stashed changes

export default userRouter