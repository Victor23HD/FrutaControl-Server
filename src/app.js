import express from "express";
import routes from "./routes/index.js";
import database from "./config/dbConnect.js";

database.on("error", console.log.bind( console, "Error na conexão!"));
database.once("open", () => {
    console.log("Conexão feita com sucesso!");
});

const app = express();
routes(app);



export default app;