import dbConnect from "../../../utils/Mongo";
import Kid from "../../../model/Kid";

export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     await dbConnect()
    console.log("Database Connected");    
    
    if (method === "GET") {
        
        const allKid = await Kid.find()
        res.status(200).json(allKid)
    }
    if (method === "POST") {
        try {
            const newKid = await Kid.create(req.body);
            res.status(200).json(newKid);
            console.log("New kid created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}