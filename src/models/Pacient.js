import mongoose from "mongoose";
import { addressSchema } from "./Address.js";

const pacientSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    name: { type: String, required: [true, 'Pacient name must be provided!'] },
    age: { type: Number, required: [true, 'Pacient age must be provided!'] },
    address: { type: addressSchema, ref: 'addresses', required: [true, 'Address must be provided'] },
}, { versionKey: false });

const pacients = mongoose.model('pacients', pacientSchema);

export { pacientSchema, pacients };