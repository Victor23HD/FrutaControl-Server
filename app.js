import express from "express";
import routes from "./src/routes/index.js";

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("FrutaControl!");
});

routes(app);

app.listen(port, () => {
    console.log(`Example app listen on ${port}`);
    console.log(`http://localhost:${port}/`);
});