/* eslint-disable no-unused-vars */

import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
    
    if (req.method == 'POST') {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email });

        const bytes = CryptoJS.AES.decrypt(user.password, 'secret');
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
        console.log(req.body.email, decryptedPass);
        if (user) {
            if (req.body.password === decryptedPass) {
                res.status(200).json({ success: true, name: user.name, email: user.email })
            } else {
                res.status(400).json({ success: false, error: 'Invalid Credentials'});
            }
        } else {
            res.status(400).json({ success: false, error: 'Invalid Credentials'});
        }
        
    } else {
        res.status(400).json({ success: false, error: "Please Use Post Method" })
    }
}

export default connectDb(handler)
