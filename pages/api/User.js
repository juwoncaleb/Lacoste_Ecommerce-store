import dbConnect from '../../utils/Mongo';
import user from "../../model/User"

export default async function User(req, res) {
    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the database...");

      //Creation of a new Document
      console.log("Creathing Clothes Document");
      const userDoc  = await user.create(req.body)
      console.log("Document created");

      res.status(200).json({userDoc})
}