import dbConnect from "../../../utils/Mongo";
import Retro from "../../../model/Retro";

export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     await dbConnect()
    console.log("Database Connected");    
    
    if (method === "GET") {
        
        const allRetro = await Retro.find()
        res.status(200).json(allRetro)
    }
    if (method === "POST") {
        try {
            const newRetro = await Retro.create(req.body);
            res.status(200).json(newRetro);
            console.log("New RETRO created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}