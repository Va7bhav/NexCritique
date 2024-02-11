/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";
import User from "@/models/User";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { email, orderId, cart, address, amount } = req.body;

        // tempering check 
        let sumTotal = 0;
        for (let item in cart) {
            sumTotal += cart[item].price * cart[item].qty;
            console.log(item);
            let product = await Product.findOne({ slug: item });

            if (product.availableQty < cart[item].qty) {
                res.status(400).json({ success: false, message: "Some Items in your Cart have went out of stock! Please recheck the available quantity of products and try again" });
                return;
            }

            console.log(product);
            if (product.price != cart[item].price) {
                res.status(400).json({ success: false, message: "Sorry the items prices were tempered with", tempered: true })
                return;
            }
        }
        if (sumTotal !== amount) {
            res.status(400).json({ success: false, message: "Items prices were tempered with", tempered: true })
            return;
        }


        // begin the transaction
        let user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ success: false, message: 'Please use the Email Id registered for the application' })
        } else {
            // we got the user
            if (user.wallet >= amount) {
                let o = new Order({ email, orderId, products: cart, address, amount, status: 'Accepted' });
                await o.save();

                res.status(400).json({ success: true, message: 'Your Order has been placed, redirecting to orders page' });

                // post transaction update the user wallet
                const filter = { email: email };
                const updatedMoney = user.wallet - amount;
                const update = { wallet: updatedMoney }
                user = await User.findOneAndUpdate(filter, update);

                // post transaction update the database
                let products = o.products;
                for (let slug in products) {
                    await Product.findOneAndUpdate({ slug: slug }, { $inc: { 'availableQty': - products[slug].qty } });
                }
            } else {
                res.status(400).json({ success: false, message: 'Please ensure your wallet has sufficient credentials' });
            }
        }
    } else {
        res.status(400).json({ error: "Please Use Post Method" })
    }
}

export default connectDb(handler)
