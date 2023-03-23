import dbConnect from "../../../utils/Mongo";
import Order from "../../../model/Order";
export default async function Handler (req, res) {
    // Connect to Database
    console.log("Connecting to the database...");
     dbConnect()
    console.log("Database Connected");    
    
    if (req.method === "GET") {
        const allOrders = await Order.find()
        res.status(200).json(allOrders)
    }
    if (req.method === "POST") {
        try {
            const newOrder = await Order.create(req.body);
            res.status(200).json(newOrder);
            console.log("New Product created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}