import app from "./src/app.js";

const port = process.env.PORT || 3000;

// Open route - public route
app.listen(port, () => {
    console.log(`Example app listen on ${port}`);
    console.log(`http://localhost:${port}/`);
});