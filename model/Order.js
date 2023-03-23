import { Schema, model, models } from "mongoose"

const orderSchema = new Schema({

    name: {
        type: Strong,
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    note: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
    },
    product: [
        
    ]
})
const Order = model.Order || model("Order", orderSchema);
export default Order
