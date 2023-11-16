import NotFoundError from "../errors/NotFoundError.js";
import { doctors } from "../models/index.js";
import { appointment } from "../models/index.js";

class DoctorsController {
    static async getDoctors(req, res, next) {
        try {
            const doctorsList = await doctors.find();
            res.status(200).json(doctorsList);
        } catch (error) {
            next(error);
        }
    }

    static async getDoctorById(req, res, next) {
        try {
            const id = req.params.id;
            const searchedDoctor = await doctors.findById(id);
            if (searchedDoctor !== null) {
                res.status(200).json(searchedDoctor);
            } else {
                next(new NotFoundError('Doctor not found!'));
            }
        } catch (error) {
            next(error);
        }
    }

    static async getDoctorsByFilter(req, res, next) {
        try {
            const search = processSearch(req.query);
            if (search !== null) {
                const doctorsSearch = await doctors.find(search);
                res.status(200).json(doctorsSearch);
            } else {
                res.status(200).json({});
            }
        } catch (error) {
            next(error);
        }
    }

    static async saveDoctor(req, res, next) {
        try {
            const doctorData = req.body;
            const newDoctor = await doctors.create(doctorData);
            res.status(201).json({ message: 'Doctor saved successfully', doctor: newDoctor });
        } catch (error) {
            next(error);
        }
    }

    static async updateDoctor(req, res, next) {
        try {
            const id = req.params.id;
            if (await doctors.findByIdAndUpdate(id, req.body) !== null) {
                const doctorUpdated = await doctors.findById(id);
                res.status(200).json(doctorUpdated);
            } else {
                next(new NotFoundError('Doctor not found!'));
            }
        } catch (error) {
            next(error);
        }
    }

    static async deleteDoctor(req, res, next) {
        try {
            const id = req.params.id;
            if (await doctors.findByIdAndDelete(id) !== null) {
                res.status(200).json({ message: 'Doctor deleted successfully!' });
            } else {
                next(new NotFoundError('Doctor not found!'));
            }
        } catch (error) {
            next(error);
        }
    }

    static async registerNewAppointment(req, res, next) {
        try {
            const doctorId = req.params.id;
            const newAppointment = await appointment.create({ ...req.body, doctorId });
            const result = await doctors.findByIdAndUpdate(
                doctorId,
                {
                    $push: {
                        appointments: newAppointment,
                    },
                },
                { new: true }
            );
            if (result) {
                res.status(201).json({ message: 'New appointment created', newAppointment });
            } else {
                next(new NotFoundError('Doctor not found!'));
            }
        } catch (error) {
            next(error);
        }
    }
}

function processSearch(parameters) {
    const { name, age, minPages, maxPages } = parameters;
    const search = {};
    if (name) search.name = { $regex: name, $options: "i" };
    if (age) search.age = { $regex: age, $options: "i" };
    if (minPages || maxPages) search.pages = {};
    if (minPages) search.pages.$gte = minPages;
    if (maxPages) search.pages.$lte = maxPages;

    return search;
}

export default DoctorsController;