import express from "express";
import userRouter from "./userRouter.js";

const routes = (app) =>
{
    app.use(
        express.json(),
        userRouter
    );
}

export default routes