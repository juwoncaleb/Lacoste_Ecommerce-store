import dbConnect from "../../../utils/Mongo";
import Comfort from "../../../model/Comfort";

export default async function Handler(req, res) {
    // connect to database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the database...");
   
    // thos is to get the get the id in the req
    const { method, query:{id} } = req

    if (method === 'GET') {
        try {
            const comfortItem = await Comfort.findById(id)
            res.status(200).json(comfortItem)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'PUT') {
        try {
            const comfortItem = await Comfort.create(req.body)
            res.status(201).json(comfortItem)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'DELETE') {
        try {
            await Comfort.findByIdAndDelete(id)
            res.status(200).json("product has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }

    }
    
} 
