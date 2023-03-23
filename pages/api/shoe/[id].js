import dbConnect from "../../../utils/Mongo";
import Shoe from "../../../model/Shoe";

export default async function Handler(req, res) {
    // connect to database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the retro...");
   
    // thos is to get the get the id in the req
    const { method, query:{id} } = req

    if (method === 'GET') {
        try {
            const showProd = await Shoe.findById(id)
            res.status(200).json(showProd)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'PUT') {
        try {
            const showProd = await Shoe.create(req.body)
            res.status(201).json(showProd)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'DELETE') {
        try {
            await Shoe.findByIdAndDelete(id)
            res.status(200).json("product has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }

    }
    
} 
