import express from "express";
import usersControllers from "../controllers/usersControllers.js";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter
  .get("/users/:id", checkToken, usersControllers.collectData)
  .post("/users", usersControllers.registerUsers)
  .post("/users/auth", usersControllers.checkLogin);

async function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ msg: "Access denied!" });
  }
  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
    
  } catch (error) {
    res.status(400).json({ msg: `Invalid token!` });
  }
}

export default userRouter;
