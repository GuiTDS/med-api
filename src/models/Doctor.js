import mongoose from "mongoose";
import { addressSchema } from "./Address.js";
import { appointmentSchema } from "./Appointments.js";

const doctorSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    name: { type: String, required: [true, "Doctor name must be provided!"] },
    age: { type: Number, required: [true, "Doctor age must be provided!"] },
    appointments: [{ type: appointmentSchema, ref: 'appointments' }],
    address: { type: addressSchema, ref: 'addresses', required: [true, 'Address must be provided!'] },
}, {versionKey: false});

const doctors = mongoose.model('doctors', doctorSchema);

export { doctorSchema, doctors };