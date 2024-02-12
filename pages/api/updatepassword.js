/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jsonwebtoken from 'jsonwebtoken';
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token = req.body.token;
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)

        let dbUser = await User.findOne({ email: user.email });

        const bytes = CryptoJS.AES.decrypt(dbUser.password, process.env.AES_SECRET);
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)

        console.log(decryptedPass)
        if (decryptedPass == req.body.password) {
            await User.findOneAndUpdate({ email: user.email }, { password: CryptoJS.AES.encrypt(req.body.npassword, process.env.AES_SECRET).toString() })
            res.status(200).json({ success: true, message: "Password has been updated" });
             
        } else {
            res.status(200).json({ success: false, message: "Old Password is Wrong" });
        }

    } else {
        res.status(400).json({ error: 'error' });
    }
}

export default connectDb(handler)
