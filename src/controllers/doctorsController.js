import { doctors } from "../models/Doctor.js";

class DoctorsController {
    static async getDoctors(req, res, next) {
        try {
            const doctorsList = await doctors.find();
            res.status(200).json(doctorsList);
        } catch (error) {
            console.error('erro na requisicao: ', error);
        }
    }
}

export default DoctorsController;