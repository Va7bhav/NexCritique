/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {

    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
            if (req.body.password === decryptedPass) {
                const token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, {expiresIn: '2d'});
                res.status(200).json({ success: true, token, email: user.email })
            } else {
                res.status(400).json({ success: false, error: 'Invalid Credentials' });
            }
        } else {
            res.status(400).json({ success: false, error: 'Invalid Credentials' });
        }

    } else {
        res.status(400).json({ success: false, error: "Please Use Post Method" })
    }
}

export default connectDb(handler)
