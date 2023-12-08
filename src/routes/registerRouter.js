import express  from "express";
import checkToken from "../utils/token.js";
import registerControllers from "../controllers/registerControllers.js";

const registerRouter = express.Router();

registerRouter
.post("/register?frutas", checkToken, registerControllers.registerFruit);

export default registerRouter;