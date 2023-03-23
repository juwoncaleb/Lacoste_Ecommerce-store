

import React, { useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { useSession, signIn, signOut } from "next-auth/react"

const CheckoutTwo = () => {
  const { data: session } = useSession()
  const cart = useSelector((state) => state.cart.products)
  const router = useRouter()
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')
  const orders = []
  orders.push(cart)

  console.log(cart);

  const submitComment = async () => {
    // this is to find where we want to post int
    await fetch('/api/Product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name

      }),
    })

    let data = await res.json()

  }
  if (session) {

    return (
      <div>
        <Header />
        <p className="checkoutTwo_Text text-6xl "> <span onClick={() => router.push('/checkoutOne')} className="GreyText cursor-pointer" >1</span ><span className="pl-5">-</span><span onClick={() => router.push('/checkoutTwo')} className='GreyText pl-4 cursor-pointer'>2</span><span className="pl-5">-</span><span className=' pl-4'>3</span></p>
        <p className='shipping_Header text-4xl md:text-7xl mb-20  '>PAYMENT</p>
        <p className='shipping_Header text-4xl md:text-7xl mb-20  '>{session.user.name}</p>


        <p className='shipping_Header text-7xl mb-20  '></p>

        <div className='flex justify-around checkou'>
          <div className='mr-20'>


            <div className=' flex justify-around pl-20 mt-4'>
              <input type='checkbox' />
             

              <p className="  smallerText">Based on national delays with the shipping providers , packages arrives within 5
                to 10 working days from when it is shipped . Due to precautionary measures  at the warehouse
              </p>
            </div>
            <p  className='checkoutHeader text-left ml-40 mt-10' >EXPRESS DELIVERY - $20</p>


            <div className=' flex justify-center mb-10 pl-20 mt-4'>
              <input type='checkbox' />
              <p className="smallerText ">Based on national delays with the shipping providers , packages arrives within 5
                to 10 working <span onClick={()=>{signOut()}}>days</span> from when it is shipped . Due to precautionary measures  at the warehouse
              </p>
            </div>
          </div>



          <div className='mr-20'>
            {

              cart.map((items) => (

                <div key={items._id}>

                  <hr className='cart' />
                  <div className='flex justify-around mt-6 mb-6'>
                    <div className="">
                      <img className='cartImg ml-20' src={items.images} />
                      <p className='text-2xl lastCheck'>{items.name}</p>
                      <p className='smallerText font-semibold lastCheck'>size : {items.itemSize}</p>


                    </div>
                    <div className="mt-8 basis-1/2">
                      <div className='ml-40'>
                        <div>

                        </div>

                        <div className="flex justify-start mt-4">
                        </div>

                      </div>
                    </div>


                    <div className=''>
                      <p className='smallerText font-semibold text-3xl'>${items.price * items.amount}</p>


                    </div>

                  </div>

                  <hr className='cart' />
                </div>
              ))
            }
          </div>

        </div>


        <div className='flex justify-around checkoutt  mt-40'>
          <div className='shipingTexts'>
            <p className='checkoutHeader text-left ml-40 mt-10'>SHIPPING ADDRESS (*required)</p>
            <p className="text-justify ml-40 smallerText mt-4 ">Items will be deliverd directly to your doorstop , based on the given address</p>
            <div className=' mt-8 smallerText font-bold ml-20 flex jusify-around pl-20'>

              <div>
                <p>Title </p>
              </div>

              <div className='flex jusify-around ml-20'>
                <input type="checkbox" />
                <p className="ml-2">Mr</p>
              </div>

              <div className='flex jusify-around ml-20'>
                <input type="checkbox" />
                <p className="ml-2">Ms</p>
              </div>

              <div className='flex jusify-around ml-20'>
                <input type="checkbox" />
                <p className="ml-2">Mrs</p>
              </div>

            </div>
            <form className='bg-white ml-24 form' action="/action.php">
              <input disabled className='fill mt-10' type="text" id="fname" placeholder={session.user.name} />
              <input className='fill mt-10' type="text" id="fname" placeholder={session.user.email} disabled />

              <input className='fill mt-10' type="text" id="fname" placeholder="Phone number" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber} />

              <input className='fill mt-10' type="text" id="fname" placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} value={address} />


              <br />
              <textarea className='fill mt-10' id="txtid" name="txtname" rows="8" cols="100" maxLength="200" placeholder='Additiional Note' onChange={(e) => { setNote(e.target.value) }} value={note} >

              </textarea>

            </form>
          </div>
          <div className=' basis-1/4  finalcart'>
            <div className='flex justify-between final_checkout_Header'>
              <p>2 PRODUCTS</p>
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
  } else {

    return (
      <div>
        {/* <Header /> */}
        <p className="checkoutTwo_Text text-6xl "> <span onClick={() => router.push('/checkoutOne')} className="GreyText cursor-pointer" >1</span ><span className="pl-5">-</span><span className=' pl-4 cursor-pointer'>2</span><span className="pl-5">-</span><span className='GreyText pl-4'>3</span></p>
        <p className='shipping_Header text-7xl '>Shipping</p>
        <p className='shipping_subHeader  '>ENTER YOUR EMAIL ADDRESS TO <br /> CONTINUE</p>
        <p className='shipping_text mt-4'>    Email will be used to track your order . If you dont have an account <br /> you will be able to create one during the shipping process </p>

        <div className='email_Input'>
          <div>
            <input placeholder='Your email address' className='email_Input_bar' />
          </div>
          <div onClick={() => { signIn() }} className='button_email'>
            <a  className='shipping_text'  >Continue</a>
          </div>
        </div>
        <p className='shipping_text mt-10'>Sign up with your socials</p>
        <div className='flex justify-center mt-4'>
          <img className='mr-4 signUpIcon' src="https://img.icons8.com/ios-filled/50/000000/twitter.png" />
          <a onClick={() => { signIn() }} className='shipping_text'  > <img className='signUpIcon' src="https://img.icons8.com/color/48/000000/google-logo.png" />
          </a>

        </div>
        <Footer />
      </div>
    )
  }
}

export default CheckoutTwo