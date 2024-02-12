// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

// #10:56
const ForgotSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Forgot", ForgotSchema);