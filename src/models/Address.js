import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    streetAddress: { type: String, required: [true, 'Street must be provided'] },
    city: { type: String, required: [true, 'City must be provided'] },
    state: { type: String, required: [true, 'State must be provided'] },
    zipCode: { type: String, required: [true, 'Zipcode must be provided'] },
}, { versionKey: false });

const addresses = mongoose.model('addresses', addressSchema);

export { addressSchema, addresses };