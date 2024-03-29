/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

// #10:56
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: Buffer, contentType: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Product", ProductSchema);