import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        let newProduct = new Product({
            title: req.body.title,
            slug: req.body.slug,
            desc: req.body.desc,
            img: req.body.img,
            category: req.body.category,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            availableQty: req.body.availableQty
        })
        await newProduct.save();

        res.status(200).json({ success: true, message: "The Product has been issued" });
    } else {
        res.status(400).json({ error: "Please Use Post Method" })
    }
}

export default connectDb(handler)
