import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    name: { type: String, required: [true, "Doctor name must be provided!"]},
    age: { type: Number, required: [true, "Doctor age must be provided!"]},
}, {versionKey: false});

const doctors = mongoose.model("doctors", doctorSchema);

export { doctorSchema, doctors };