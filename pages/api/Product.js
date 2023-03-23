import dbConnect from '../../utils/Mongo';
import Product from '../../model/Product'


export default async function productSchema(req, res) {

    // Connect to database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connected to the database...");
    // Creation of document

    const newItem = await Product.create(req.body)

    res.status(200)
    console.log("sent to the database");



}
