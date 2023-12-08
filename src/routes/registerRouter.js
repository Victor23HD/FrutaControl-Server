import express  from "express";
import checkToken from "../utils/token.js";
import registerControllers from "../controllers/registerControllers.js";

const registerRouter = express.Router();

registerRouter
.get("/listFruit/:id", checkToken, registerControllers.listFruit)
.post("/registerFruit", checkToken, registerControllers.registerFruit);


export default registerRouter;