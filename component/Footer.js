import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div class="grid grid-cols-4 md:grid-cols-4  gap-4 loadIcon ">
          <div>
            <img className="icon" src="return-product.png" />
          </div>
          <div>
            <img className="icon" src="headphone.png" />
          </div>
          <div>
            <img className="icon" src="card.png" />
          </div>
          <div>
            <img className="icon" src="truck.png" />
          </div>
        </div>
        <hr className="borderLine" />
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4  footerMenu">
          <div>
            <p className="footerMain">About Lacoste</p>
            <br />
            <p>The Lacoste Group</p>
            <br />
            <p>Career</p>
            <br />
            <p>Millitary Discount</p>
            <br />
            <p>Brand Protection</p>
            <br />
            <p>Customize Your Polo</p>
          </div>
          <div>
            <p className="footerMain">OUR CATEGORY</p>
            <br />
            <p>Men's Collection</p>
            <br />
            <p>Women's Collection</p>
            <br />
            <p>Kid's Collection</p>
            <br />
            <p>Shoe Shop Protection</p>
            <br />
            <p> Polo Shop</p>
          </div>
          <div>
            <p className="footerMain">CONTACT</p>
            <br />
            <p>BY PHONE</p>
            <br />
            <p>08123654889</p>
            <br />
            <p>Contact us Monday through Friday </p>
            <br />
            <p>BY EMAIL</p>
            <br />
            <p>Calebomojuwon@gmail.com</p>
          </div>{" "}
          <div>
            <p>Want exclusive offers and first access to </p>
            <p>To products? Sign </p>
            <hr className="mt-4 emailLine" />
            <p className="email">Your Email Address</p>
            <hr className="mt-4 emailLine" />
            <div className="SignUpButton">
              <p className="sign">Sign Up</p>
            </div>
            <br />
            <br />
            {/* ICONS */}
            <div className="flex justify-evenly">
              <img
                className="footerIcon"
                src="https://img.icons8.com/doodle/48/000000/instagram-new.png"
              />

              <img
                className="footerIcon"
                src="tt.png"
              />
              <img
                className="footerIcon"
                src="uuu.png"
              />
              <img
                className="footerIcon"
                src="ffb.png"
              />
              
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lastfooter ">
          <div className="payment">
            <div className="pay  ">
              <p>PAYMENT OPTION</p>
              <div className="flex justify-around mt-6">
                <img
                  className="lastIcon relative right-16"
                  src="https://img.icons8.com/stickers/100/000000/visa.png"
                />
                <img
                  className="lastIcon relative right-8"
                  src="https://img.icons8.com/ios/100/000000/apple-pay.png"
                />

                <img
                  className="lastIcon"
                  src="https://img.icons8.com/fluency/48/000000/mastercard.png"
                />

                <img
                  className="lastIcon relative left-10"
                  src="https://img.icons8.com/cotton/64/000000/paypal--v2.png"
                />
              </div>
            </div>
          </div>
          
          
          <div>
           <div className="shipping">
           <p>SHIPPING</p>
            <div className="flex justify-center">
              <img
                className="lastIcon mt-6"
                src="https://img.icons8.com/color/48/000000/ups-airlines.png"
              />
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}