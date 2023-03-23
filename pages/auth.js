
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik'
import { useState } from 'react'

const Auth = () => {
    
    if (session) {
        return (
            <div>
                <p> Welcome , {session.user.name}</p>
                <p onClick={() => signOut()}>SignOut</p>
            </div>)
    } else {
        return (
            <div className='flex justify-around'>
                {/* FORM */}

                <div className='leftBox'>
                    <img onClick={() => router.push('/')} className="lacoste cursor-pointer" src="./logos.png" />


                    <div className='mt-20'>

                        <p className=' text-4xl font-medium headerText '>Welcome to Lacoste </p>
                        <p className='smallerText text-1xl  mt-6'>Please enter your account details</p>

                        <br />

                    </div>
                    <div className="grid">
                        <form className='bg-white ml-2' action="/action.php" >
                            <input type="email"  className='fill mt-10'  id="fname" placeholder="Name" />
                            <input  className='fill mt-10' type="text" id="fname" placeholder="Phone number" />

                            <button className='mt-10 bg-black  fill'>
                                Log in
                            </button>
                            
                        </form>
                    </div>

                    <div onClick={() => signIn()} className='loginButton flex mt-20 '>
                        <img className="google cursor-pointer" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
                        <p className='mt-3 loginText smallerText font-bold'>Log in with Google</p>
                    </div>

                    <div className='mt-10 smallerText' >
                        <p>Dont have an account with us yet ?  <br /> You can always <span className='signn cursor-pointer'>Sign up</span> for Free </p>
                    </div>

                </div>




                {/* IMAGE SECTION */}
                <div>
                    <img onClick={() => router.push('/')} className=" mt-10" src="./trevv.png" />
                    <p className='smallerText text-4xl font-bold mt-4'>Dress like you’re already famous</p>
                    <p className='smallerText text-4xl font-bold mt-4' >Simply elegant.</p>
                </div>
            </div>
        )
    }
}
export default Auth
