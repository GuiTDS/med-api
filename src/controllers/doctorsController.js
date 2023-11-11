import { doctors } from "../models/Doctor.js";

class DoctorsController {
    static async getDoctors(req, res, next) {
        try {
            const doctorsList = await doctors.find();
            res.status(200).json(doctorsList);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    static async getDoctorById(req, res, next) {
        try {
            const id = req.params.id;
            const searchedDoctor = await doctors.findById(id);
            if (searchedDoctor !== null) {
                res.status(200).json(searchedDoctor);
            } else {
                res.status(404).json({ message: 'Doctor not found!' });
            }
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    static async saveDoctor(req, res, next) {
        try {
            const doctorData = req.body;
            const newDoctor = await doctors.create(doctorData);
            res.status(201).json({ message: 'Doctor saved successfully', doctor: newDoctor });
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    static async updateDoctor(req, res, next) {
        try {
            const id = req.params.id;
            if (await doctors.findByIdAndUpdate(id, req.body) !== null) {
                const doctorUpdated = await doctors.findById(id);
                res.status(200).json(doctorUpdated);
            } else {
                res.status(404).json({ message: 'Doctor not found!' });
            }
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }
}

export default DoctorsController;