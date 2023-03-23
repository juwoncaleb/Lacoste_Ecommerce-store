import dbConnect from '../../utils/Mongo';
import order from '../../model/Order'
export default async function ClothesSchema(req, res) {

    console.log("Connecting to the database...");
    await dbConnect()
    console.log("Connectied to the database...");

    //Creation of a new Document
    console.log("Creathing Clothes Document");
    const orderDoc = await order.create(req.body)
    console.log("Document created");


    res.status(200).json({ orderDoc })

}
