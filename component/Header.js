import React, { useState } from "react";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link'

function Header() {
  const router = useRouter()
  const orderQuantity = useSelector((state) => state.cart.products.length)
  console.log(orderQuantity);
  return (

    <div className="headerFixed ">

      <div className="flex justify-between">
        <div className="flex justify-between lefticon">
          <img
            className="navIcon"
            src="https://img.icons8.com/ios/100/undefined/marker--v2.png"
          />
          <img
            className="navIcon moon"
            src="https://img.icons8.com/external-thin-kawalan-studio/96/undefined/external-dark-mode-user-interface-thin-kawalan-studio.png"
          />
        </div>

        <Link href="/" >
          <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="./logos.png" />
        </Link>


        <div className="flex justify-around rightIcon">
          <img onClick={() => router.push('/')}
            className="navIcon"
            src="https://img.icons8.com/ios/50/undefined/search--v3.png"
          />
          <img
            className="navIcon"
            src="https://img.icons8.com/ios/50/undefined/user--v3.png"
          />



          <div onClick={() => router.push('/checkoutOne')}  className="cursor-pointer"  >
          
              <img
                className="navIcon "
                src="https://img.icons8.com/ios/50/undefined/shopping-bag--v1.png"
              />
          

            <p className="cartCount">
              {orderQuantity}
            </p>
          </div>
        </div>
      </div>
      {/* HEADER TWO */}

      <hr className="border1 " />
      <div className="headerText flex justify-between ">
        <Link href="/men" >
          <p className="mt-2 men cursor-pointer headersText mr-2 " >MEN</p>
        </Link>
        <Link href="/women" >
          <p className="mt-2  cursor-pointer headersText	mr-2 " >WOMEN</p>
        </Link>
        <Link href="/kids" >
          <p className="mt-2  cursor-pointer	headersText mr-2 " >KIDS</p>
        </Link>
        <Link href="/shoe" >
          <p className="mt-2  cursor-pointer	headersText mr-2 " >SHOES</p>
        </Link>
        <Link href="/discount" >
        <p className="mt-2  dis cursor-pointer headersText	mr-2 "> DISCOUNT</p>
        </Link>
      </div>
      <hr className="border1 mt-3" />


      <div>

        {/* CAROUSEL */}
        <div>

        </div>
      </div>
    </div>
  );
}

export default Header;
