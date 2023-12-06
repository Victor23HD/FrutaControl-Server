import express from "express";
import userRouter from "./userRouter.js";
import registerRouter from "./registerRouter.js"

const routes = (app) =>
{
    app.route("/").get((req, res) => {
        res.status(200).send("FrutaControl!");
    });

    app.use(
        express.json(),
        userRouter,
        registerRouter,
        notFound
    );
};

const notFound = (req, res) => {
   return res.status(404).send({Message: "Page not found"});
}

export default routes