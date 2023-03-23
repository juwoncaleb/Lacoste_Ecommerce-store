import React, { useEffect, useState, useMemo } from "react";
// import dbConnect from "../../utils/Mongo";
// import Product from "../../model/Product";
// import axios from "axios";

import { useRouter } from 'next/router'
import Footer from "../component/Footer";
import Header from "../component/Header";
import Link from "next/link"
import axios from 'axios'

// AUTHENTICATION
import { useSession, signIn, signOut } from "next-auth/react"
export default function Men() {
  const router = useRouter()


  return (
    <div className="newBack">
      <Header />
      <p className="headerTex text-1xl mt-10">LACOSTE FOR MEN</p>

      <p className="headerTex text-3xl md:text-8xl mt-5 mb-5">The New Collection</p>

      <img className="menfashion ml-auto mr-auto  " src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667684354/uploads/pdprvwvlgdjtmgolcsl8.png" />

      <p className="text-3xl mb-20 justify-start menChoice "> Men</p>


      <div className="grid grid-rows-3 grid-flow-col md:ml-10 gap-4 ">
        <div className="row-start-2 row-span-2 ...">  <div className="" onClick={() => router.push('/summerFine')}>
          <img className="  cursor-pointer imgOption  " src="koofo.jpg" />
          <div className="mobpad">
            <p className="headerText text-1xl md:text-2xl flex cursor-pointer textFix"> Summer Fine</p>
            <hr className="textline textFix" />
          </div>

        </div>
        </div>
        <div className="row-end-3 row-span-2 ...">
          <div className=" "  >
            <img onClick={() => router.push('/casual')} className="cursor-pointer mt-20 imgOption " src="bro.jfif" />
            <p className=" text-1xl md:text-2xl flex  "> Casual</p>
            <hr className="textline_2" />


          </div>
        </div>
        <div className="row-start-2 row-span-2 ...">  <div className="menStyleGrid_third" onClick={() => router.push('/office')}>
          <img className="cursor-pointer imgOption  " src="work.jpg" />
          <div className="officeMob">
            <p className="headerTe text-1xl md:text-2xl flex  "> Office</p>
            <hr className="textline_3" />
          </div>

        </div></div>

      </div>


      <div className="grid grid-rows-3 grid-flow-col gap-4 md:ml-10 mb-10">
        <div className="row-start-2 row-span-2 ...">
          <div className="" onClick={() => router.push('/office')}>
            <img className="cursor-pointer imgOption   " src="sk.jpg" />
            <div className="urbanline">
              <p className="headerTe text-1xl md:text-2xl flex  "> Urban</p>
              <hr className="textline_6" />
            </div>

          </div>

        </div>

        <div className="row-end-3 row-span-2 ...">

          <div className="cursor-pointer " onClick={() => router.push('/comfort')}>
            <img className=" imgOption " src="ss.jpg" />
            <div className="com">
              <p className="headerText text-1xl md:text-2xl flex textFix"> Comfort</p>
              <hr className="textline_4 textFix" />
            </div>

          </div>
        </div>
        <div className="row-start-2 row-span-2 ..."><div className=" " onClick={() => router.push('/retro')}>
          <img className=" cursor-pointer imgOption " src="jerry.jpg" />
          <div className="reetro">
            <p className="headerTe text-1xl md:text-2xl flex  " > Retro</p>
            <hr className="textline_5" />
          </div>

        </div></div>

      </div>
      <div className="flex exploreButton">
        <p className=" headerTex exploreText">Explore More !
        </p>
      </div>

      <div className=" mb-40">

        {/* LINES */}

        <div className="bar">
          <div className="flex world  ">
            <img className="recomend_logo" src="logo1.png" />

            <p className="lacoste_Text ">The Lacoste World</p>
          </div>
          {/* LINES */}
          <img className="tat " id="boxer" src="boxers.png" />

          <div className="lineBar">
            <div className="line">
              <hr className="bars" />
              <p className="footwear md:text-7xl text-4xl ">The Latest Footwear</p>
              <hr className="bars" />
              <div className="flex justify-center">
                <img className="logo1 mr-4" src="logo1.png" />

                <p className="footwear md:text-7xl text-4xl mr-20" id="black">
                  The Latest Leather
                </p>
              </div>
              <hr className="bars" />
              <div className="flex justify-center">
                <p className="footwear md:text-7xl text-4xl">Summer Accessories</p>
              </div>
              <hr className="bars" />
              <p className="footwear md:text-7xl text-4xl">Summer Selection</p>
              <hr className="bars" />
            </div>
          </div>
        </div>
      </div>

     
      <Footer />
    </div>
  );
}

