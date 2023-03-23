import dbConnect from "../../../utils/Mongo";
import Office from "../../../model/Office";

export default async function Handler(req, res) {
    // connect to database
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the office...");

    // thos is to get the get the id in the req
    const { method, query: { id } } = req

    if (method === 'GET') {
        try {
            const officeItems = await Office.findById(id)
            res.status(200).json(officeItems)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'PUT') {
        try {
            const officeItems = await Office.create(req.body)
            res.status(201).json(officeItems)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    if (method === 'DELETE') {
        try {
            await Office.findByIdAndDelete(id)
            res.status(200).json("product has been deleted")

        } catch (error) {
            res.status(500).json(error)
        }

    }

} 
