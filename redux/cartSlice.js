import { createSlice } from "@reduxjs/toolkit";
import { sendStatusCode } from "next/dist/server/api-utils";

const cart = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        cartQuantity: 0,
        total:0,
        size :""

    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.cartQuantity += 1
            state.total += action.payload.price * action.payload.amount
            state.size = action.payload.itemSize
        },
        incrementQuantity: (state, action) => {
            // first find the item in the cart with the payloadId
            const item = state.products.find((item) => item._id === action.payload);
            item.quantity++


        },
        calcTotal: (state) => {
            let amount = 0
            let total = 0
            state.products.forEach((item) => {
                amount += item.quantity
                total += item.quantity * item.price
            })
            state.quantity = amount
            state.totalPrice = total
        },
        decrementQuantity: (state, action) => {
            // first find the item in the cart with the payloadId
            const item = state.products.find((item) => item._id === action.payload);
            // to ensure that the decerement doesnt go below 1
            if (item.quantity === 1) {
                item.quantity = 1 
            } else {
                item.quantity--;
            }

        },
        resetCart:(state)=>{
            state.products= []
        },


        removeItem: (state, action) => {
            const itemId = action.payload
            state.products= state.products.filter((item) => item._id !== itemId);
        },
    }
})

//export the actions out 
export const { calcTotal,addProduct, reset, incrementQuantity, decrementQuantity,resetCart,removeItem } = cart.actions;
const cartReducer = cart.reducer

export default cartReducer;