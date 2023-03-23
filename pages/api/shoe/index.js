import dbConnect from "../../../utils/Mongo";
import Shoe from "../../../model/Shoe";

export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     await dbConnect()
    console.log("Database Connected");    
    
    if (method === "GET") {
        
        const allShoe = await Shoe.find()
        res.status(200).json(allShoe)
    }
    if (method === "POST") {
        try {
            const newShoe = await Shoe.create(req.body);
            res.status(200).json(newShoe);
            console.log("New RETRO created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}