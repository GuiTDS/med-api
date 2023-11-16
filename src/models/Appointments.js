import mongoose from "mongoose";   

const appointmentSchema = mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    title: { type: String, required: [true, 'Appointment title must be provided'] },
    date: {type: Date, required: [true, 'Appointment date must be provided'] },
    description: { type: String, required: [true, 'Appointment description must be provided'] },
    doctorId: { type: mongoose.Types.ObjectId, ref: 'doctors', required: [true, 'Doctor id must be provided'] }
});

const appointment = mongoose.model('appointment', appointmentSchema);

export { appointmentSchema, appointment };