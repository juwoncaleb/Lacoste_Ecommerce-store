import React, { useEffect } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useRouter } from 'next/router'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="App">
      <Header/>
      <div className="landingPage_text ">
        <p className="text-6xl md:text-8xl  landingPage_MainText">
          Memorial Day
        </p>
        <p className="text-5xl md:text-8xl landingPage_MainText">
          Weekend Sale
        </p>

        <p className=" landingPage_subText">
          40% off storewide with code FORTYOFF
        </p>
      </div>
      <img className="backgroundImage " src="https://ik.imagekit.io/juwoncaleb/new_ZIYblYTkV.png?updatedAt=1679579250774" />

      <p className="category">Lacoste Wardtobe Essentials</p>

      <div className="flex justify-center">
        <div className="grid gap-4 grid-cols-2 xl:grid-cols-2 landingPage_secondPage  ">
          <div onClick={() => router.push('/summerFine')}>
            <img className="image1  " src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667664148/uploads/vn5axwgbjc7ylerthhyz.png" />
            <p className="catergory_subs">TrackSuit</p>
          </div>
          <div onClick={() => router.push('/retro')}>
            <img className="image1  " src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667664234/uploads/eiuvlwkdeqczoihrv08p.png" />
            <p className="catergory_subs">Blazer</p>
          </div>
          <div onClick={() => router.push('/casual')}>
            <img className="image1  " src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667664303/uploads/dfgwpzxfq463lpaebfv3.png" />
            <p className="catergory_subs">Specials</p>
          </div>
          <div onClick={() => router.push('/comfort')}>
            <img className="image1  " src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667664328/uploads/q2dvauryarcjvte6h6lx.png" />
            <p className="catergory_subs">Sweater</p>
          </div>
        </div>
      </div>

      <div className="bar">
        <div className="flex world  ">
          <img className="recomend_logo" src="logo1.png" />

          <p className="lacoste_Text ">The Lacoste World</p>
        </div>
        {/* LINES */}
        <img  className="tat" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667688338/uploads/vdj5w2dqctto29dqrrkp.png" />

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
      <div className="flex lg">
        <img className="recomend_logo" src="logo1.png" />
        <p className="text-4xl lacoste_Text ">Recommended For You</p>
      </div>

      <div className="recommended">
        <div className="grid-container ">
          <div>
            <img className="" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667688470/uploads/r9tsvznmq6wnrlv05syg.png" />
            <p>Lacoste RGB</p>
            <p>$200</p>

          </div>

          <div>
            <img className="" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667688849/uploads/zwgcgielxxzycvhoziv3.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img className="" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667693043/uploads/otgofasn9dsmworrafxv.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667690071/uploads/lghlgvqgj8uzfugycvud.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667690189/uploads/x3aufeqrjbgh0mmwkpe6.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667690326/uploads/zf5ymn5e5qgxvhwjxeb5.png" />

            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img className="grid-item grid-item-7" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667690397/uploads/gadatmq5swmj8ef5satk.jpg" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img className="grid-item grid-item-8" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667693201/uploads/si10dgfbcemwjqvbrjdq.png" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img className="grid-item grid-item-9" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667690523/uploads/rchylb3ofgr1g3gl6spw.png" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
          <div>
            <img className="grid-item grid-item-10" src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667690590/uploads/qmsq2abt63kdzpxhyjx5.png" alt="" />
            <p>Lacoste RGB</p>
            <p>$200</p>          </div>
        </div>
      </div>

      <div className="essentials ">
        <div className="Lacoste_inside flex">
          <img className="inside" src="logo1.png" />

          <p className="text-4xl lacoste_Text ">Lacoste Inside</p>
        </div>{" "}
        <div className="containerTop">
          <div className="container">
            <div className="card">
              <img src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667693985/uploads/uzaehe6yb7fdifeo97zc.png" />
              <div className="card__head">SUMMER COLLECTION</div>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667693604/uploads/pveyfocq1dvzaogacoce.png" />
              <div className="card__head">TYLER AND FRIENDS</div>
            </div>
            <div className="card">
            <img src="https://res.cloudinary.com/ddjlsw268/image/upload/v1667693504/uploads/d2xhqzcaj2qoos8unpbp.png" />
              <div className="card__head">TEES</div>
            </div>
            <div className="card">
              <img src="spring.jpg" />
              <div className="card__head">WINTER</div>
            </div>
            <div className="card">
              <img src="m2.jpg" />
              <div className="card__head">CLOTHES</div>
            </div>
          </div>
        </div>

      </div>

      <div className="">
        <Footer />

      </div>
    </div>

  );
}
