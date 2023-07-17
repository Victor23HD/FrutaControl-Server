import express from "express";

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("FrutaControl!");
});

app.listen(port, () => {
    console.log(`Example app listen on ${port}`);
    console.log(`http://localhost:${port}/`);
});