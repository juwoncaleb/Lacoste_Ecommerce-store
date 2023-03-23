import dbConnect from "../../../utils/Mongo";
import Comfort from "../../../model/Comfort";

export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     await dbConnect()
    console.log("Database Connected");    
    
    if (method === "GET") {
        
        const allComfort = await Comfort.find()
        res.status(200).json(allComfort)
    }
    if (method === "POST") {
        try {
            const newComfort = await Comfort.create(req.body);
            res.status(200).json(newComfort);
            console.log("New Comfort created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}