/* eslint-disable no-unused-vars */
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const checkValidity = (key, value, res) => {
    console.log(key, value);
    if (key == "title") {
        if (value.length <= 3) {
            res.status(200).json({ success: false, message: "The length of title should be greater than 3" });
            return false;
        }
    } else if (key == "slug") {
        if (value.length <= 3 || value.indexOf(' ') >= 0) {
            res.status(200).json({ success: false, message: "The Slug length should be greater than 3 and it should not contain any whitespaces" });
            return false;
        }

    } else if (key == "desc") {
        if (value.length <= 3) {
            res.status(200).json({ success: false, message: "The length of Description should be greater than 3" });
            return false;
        }
    } else if (key == "category") {
        if (!['tshirt', 'hoodie', 'mugs', 'stickers'].includes(value)) {
            res.status(200).json({ success: false, message: "Enter a valid category: [tshirt, hoodie, mug, sticker]" });
            return false;
        }
    } else if (key == "size") {
        if (!['XL', 'L', 'M', 'S', 'XXL'].includes(value)) {
            res.status(200).json({ success: false, message: "Enter a valid size: [S, M, L, XL, XXL]" });
            return false;
        }
    } else if (key == "color") {
        if (!['red', 'yellow', 'pink', 'purple', 'white', 'black', 'blue'].includes(value)) {
            res.status(200).json({ success: false, message: "Choose a color from ['red', 'yellow', 'pink', 'purple', 'white', 'black', 'blue]" });
            return false;
        }
    } else if (key == "availableQty") {
        if (value <= 0) {
            res.status(200).json({ success: false, message: "Quantity should be greater than 0" });
            return false;
        }
    } 
    return true
}
const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            const { title, slug, desc, img, category, size, color, price, availableQty } = req.body;
            
            // check validity of product
            for (let key in req.body) {
                if(!checkValidity(key, req.body[key], res)) {
                    return;
                }
            }
    
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
        } catch (error) {
            res.status(200).json({ success: true, message: "The Product couldn't get issued" });
        }

    } else {
        res.status(400).json({ error: "Please Use Post Method" })
    }
}

export default connectDb(handler)
