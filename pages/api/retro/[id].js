import dbConnect from "../../../utils/Mongo";
import Retro from "../../../model/Retro";

export default async function Handler(req, res) {
    // connect to database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the retro...");
   
    // thos is to get the get the id in the req
    const { method, query:{id} } = req

    if (method === 'GET') {
        try {
            const retroProd = await Retro.findById(id)
            res.status(200).json(retroProd)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'PUT') {
        try {
            const retroProd = await Retro.create(req.body)
            res.status(201).json(retroProd)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'DELETE') {
        try {
            await Retro.findByIdAndDelete(id)
            res.status(200).json("product has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }

    }
    
} 
