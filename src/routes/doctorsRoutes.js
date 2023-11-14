import express from 'express';
import DoctorsController from '../controllers/doctorsController.js';

const routes = express.Router();

routes.get("/doctors/search", DoctorsController.getDoctorsByFilter);
routes.get("/doctors", DoctorsController.getDoctors);
routes.get("/doctors/:id", DoctorsController.getDoctorById);
routes.post("/doctors", DoctorsController.saveDoctor);
routes.put("/doctors/:id", DoctorsController.updateDoctor);
routes.delete("/doctors/:id", DoctorsController.deleteDoctor);

export default routes;