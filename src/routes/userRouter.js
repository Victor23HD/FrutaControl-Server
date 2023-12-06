import express from "express";
import usersControllers from "../controllers/usersControllers.js";
import checkToken from "../utils/token.js";

const userRouter = express.Router();

userRouter
  .get("/users/:id", checkToken, usersControllers.collectData)
  .post("/users", usersControllers.registerUsers)
  .post("/users/auth", usersControllers.checkLogin);



export default userRouter;
