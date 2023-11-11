import express from 'express';
import DoctorsController from '../controllers/doctorsController.js';

const routes = express.Router();

routes.get("/doctors", DoctorsController.getDoctors);

export default routes;