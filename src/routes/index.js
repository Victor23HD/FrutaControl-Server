import express from "express";
import userRouter from "./userRouter.js";

const routes = (app) =>
{
    app.route("/").get((req, res) => {
        res.status(200).send({msg: "FrutaControl!"});
    });

    app.use(
        express.json(),
        userRouter,
        notFound
    );
};

const notFound = (req, res) => {
   return res.status(404).send({Message: "Page not found"});
}

export default routes