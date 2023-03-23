import React, { useState, useEffect } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useRouter } from 'next/router'
import { incrementQuantity, decrementQuantity, calcTotal } from '../redux/cartSlice'
import { resetCart, removeItem } from '../redux/cartSlice'

import { useDispatch, useSelector } from 'react-redux'

export default function CheckoutOne() {
  const router = useRouter()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  console.log(cart);

  const reset = () => {
    dispatch(resetCart())
  }


  return (
    <div>
      <Header />
      <p className="checkOne text-6xl "> <span >1</span ><span className="pl-5">-</span><span className='GreyText pl-4'>2</span><span className="pl-5">-</span><span className='GreyText pl-4'>3</span></p>
      <p className='shipping text-5xl mb-20'>CART</p>


      {

        cart.products.map((items) => (

          <div key={items._id}>

            <hr className='cart' />
            <div className='flex justify-around mt-6 mb-6'>

              <div className="">
                <img className='cartImg ' src={items.images} />

              </div>


              <div className="mt-8 ">

                <div>
                  <div className='checkoutHeader flex justify-start'>
                    <p className='text-2xl itname'>{items.name}</p>

                  </div>
                </div>
                <div className="flex justify-start mt-8">
                  <p className="smallerText font-semibold	">Color</p>
                  <div>
                    <div className='color flex justify-center ml-10'></div>
                  </div>
                </div>

                <div className="flex justify-start mt-4">
                  <p className='smallerText font-semibold'>size : {items.itemSize}</p>
                </div>




              </div>

              <div>
                <p className='smallerText font-semibold text-3xl'>$ {items.price * items.amount}</p>

                <img className='deleteItemIcon mt-2 ' onClick={() => {
                  dispatch(removeItem(items._id))
                }} src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png" />

              </div>
            </div>

            <hr className='cart' />
          </div>
        ))
      }

      <p className='shipping text-2xl mt-4' onClick={reset}>RESET</p>


      <div className="mt-40 grid justify-center ml-auto proceed">
        <p className=' checkoutHeader mb-20'>Promo Code</p>
        <div className='flex'>
          <input className='promoCode' placeholder='Enter your promo code' />
          <div className='ml-4 promoButton smallerText'>
            Apply
          </div>
        </div>


        <div className=' mt-10 '>
          <div className='flex justify-between final_checkout_Header'>
            <p>PRODUCTS</p>
            $ {cart.total}
          </div>
          <div className='flex justify-between smallerText font-semibold mt-4'>
            <p>Shipping</p>
            $ 0
          </div>
          <div className='flex justify-between smallerText font-semibold mt-4'>
            <p>VAT</p>
            $ 0
          </div>
          <hr className='checkout_Line' />
          <div className='flex justify-between smallerText font-semibold mt-4'>
            <p>TOTAL</p>
            <p>$ {cart.total}</p>
          </div>

          <div onClick={() => router.push('/checkoutTwo')} className='proceed_checkOut'>
            <p>Proceed to checkout</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
