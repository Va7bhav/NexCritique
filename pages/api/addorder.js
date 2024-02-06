/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
import User from "@/models/User";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { email, orderId, products, address, amount } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ success: false, message: 'Please use the Email Id registered for the application' })
        } else {
            // we got the user
            if (user.wallet >= amount) {
                let o = new Order({ email, orderId, products, address, amount, status: 'Accepted' });
                await o.save();

                res.status(400).json({ success: true, message: 'Order was successful' });

                const filter = { email: email };
                const updatedMoney = user.wallet - amount;
            

                const update = { wallet: updatedMoney }
                user = await User.findOneAndUpdate(filter, update);

            } else {
                res.status(400).json({ success: false, message: 'Please ensure your wallet has sufficient credentials' });
            }
        }
    } else {
        res.status(400).json({ error: "Please Use Post Method" })
    }
}

export default connectDb(handler)
