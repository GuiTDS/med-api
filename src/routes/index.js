import express from 'express';
import doctors from './doctorsRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Med-API"));
    app.use(express.json(), doctors);
}

export default routes;