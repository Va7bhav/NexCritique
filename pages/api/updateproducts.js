import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            // eslint-disable-next-line no-unused-vars
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
        }
        res.status(200).json({ success: 'success' });
    } else {
        res.status(400).json({ error: "Please Use Post Method"})
    }
}

export default connectDb(handler)
