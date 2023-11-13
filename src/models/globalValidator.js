import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (value) => value !== "",
    message: ({ path }) => `The ${path} field is blank`,
})