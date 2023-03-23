import { Schema, model, models } from "mongoose"

  const casualSchema = new Schema({
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
  const Casual = models.Casual || model('Casual', casualSchema)
  export default Casual
  