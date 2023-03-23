import { Schema, model, models } from "mongoose"

  const retroSchema = new Schema({
    category: {
      type: String
    },
    subCategory: {
      type: String
    },
    description: {
      type: String
    },
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    price: {
      type: Number,
      maxlength: 60,
    },
    images: {
      type: String,
      maxlength: 200
    },
    stocks: {
      type: Number,
    },
    
    totalPrice: {
      type: Number
    }
  },
    { timestamps: true }
  
  )
  const Retro = models.Retro || model('Retro', retroSchema)
  export default Retro
  