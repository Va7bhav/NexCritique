/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Forgot from "@/models/Forgot";
import User from "@/models/User";
const handler = async (req, res) => {

    // check if the user exists in the database

    // send an email to the user 
    if (req.body.sendMail) {
    
        let token = 'asdasdasdsad';
        let forgot = new Forgot({
            email: req.body.email,
            token: token
        })
        await forgot.save();
        
        let email = ``;
        res.status(200).json({ success: true, message: "Email Sent" });
    } else {
        // reset user password
        res.status(200).json({ success: true, message: "Password has been reset" });
    }
}
