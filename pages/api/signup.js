/* eslint-disable no-unused-vars */

import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        const { name, email, password } = req.body;
        let u = new User({ name, email, password: CryptoJS.AES.encrypt(password, 'secret').toString() });
        await u.save()
        res.status(200).json({ success: 'success' });
    } else {
        res.status(400).json({ error: "Please Use Post Method" })
    }
}

export default connectDb(handler)
