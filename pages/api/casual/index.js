import dbConnect from "../../../utils/Mongo"
import Casual from "../../../model/Casual";


export default async function handler(req, res) {
    const { method } = req

    console.log("Connecting to database....");
    await dbConnect()
    console.log("Connected to database");

    if (method === 'GET') {
      try {
        const newCasual = await Casual.find();
        res.status(200).json(newCasual)
      } catch (error) {
        res.status(500).json(error)
      }

    }
    if (method === "POST") {
        try {
            const newCasual = await Casual.create(req.body);
            res.status(200).json(newCasual);
            console.log("New Product created");
        } catch (error) {
            res.status(500).json(error);
        }
    }

}