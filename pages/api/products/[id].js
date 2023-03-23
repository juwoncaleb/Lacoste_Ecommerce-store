import dbConnect from "../../../utils/Mongo";
import Product from "../../../model/Product";

export default async function Handler(req, res) {
    // connect to database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the database...");
   
    // thos is to get the get the id in the req
    const { method, query:{id} } = req

    if (method === 'GET') {
        try {
            const productsItem = await Product.findById(id)
            res.status(200).json(productsItem)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'PUT') {
        try {
            const productsItem = await Product.create(req.body)
            res.status(201).json(productsItem)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'DELETE') {
        try {
            await Product.findByIdAndDelete(id)
            res.status(200).json("product has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }

    }
    
} 
