import dbConnect from "../../../utils/Mongo";
import Women from "../../../model/Women";

export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     await dbConnect()
    console.log("Database Connected");    
    
    if (method === "GET") {
        
        const allWomen = await Women.find()
        res.status(200).json(allWomen)
    }
    if (method === "POST") {
        try {
            const newWomen = await Women.create(req.body);
            res.status(200).json(newWomen);
            console.log("New RETRO created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}