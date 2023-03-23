import { Schema, model, models } from "mongoose"

const userSchema = new Schema({

    firstName: {
        type: String,
    },
    
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },

    address: [
        {
            street :String
        },{
           address2 :String

        }
        ,{
            city :String
 
         }
         ,{
            state :String
 
         }
         ,{
            phoneNumber : Number
 
         }
    ]
})
const user = model.userInfo || model("userInfo", userSchema);
export default user
