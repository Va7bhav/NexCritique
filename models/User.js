// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

// #10:56
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    wallet: { type: Number, default: 0 },
    address: { type: String, default: '' },
    pincode: { type: String, default: '' },
    phone: { type: Number, default: '' },

}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("User", UserSchema);