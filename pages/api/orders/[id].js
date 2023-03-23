import dbConnect from "../../../utils/Mongo";
import Order from "../../../model/Order";

export default async function Handler(req, res) {
    // connect to database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the database...");
   
    // thos is to get the get the id in the req
    const { method, query:{id} } = req

    if (method === 'GET') {
        try {
            const OrderItem = await Order.findById()
            res.status(200).json(OrderItem)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'PUT') {
        try {
            const OrderItem = await Order.create(req.body)
            res.status(201).json(OrderItem)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'DELETE') {
        try {
            await Order.findByIdAndDelete(id)
            res.status(200).json("Order has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }

    }
    
} 
