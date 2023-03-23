import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik'
import login_validate from "../lib/validate"

import { useRouter } from 'next/router'
export default function SignUp() {
    const router = useRouter()
    const {data: session} = useSession()
    

    return (
        <div>
            <img onClick={() => router.push('/')} className="lacoste cursor-pointer ml-40" src="./logos.png" />

            <div className='flex justify-around'>
                {/* FORM */}



                <div className='leftBox'>

                    <div className='mt-20'>

                        <p className=' text-4xl font-medium headerText '>Welcome to Lacoste </p>
                        <div className=' flex mt-10 '>
                            <p className='mt-3 loginText smallerText font-bold'>Please create your account .</p>
                        </div>
                        <br />
                        <div className="grid">
                        <form className='bg-white ml-2' action="/action.php" >
                            <input onChange={(e) =>{setEmail(e.target.value)}}  className='fill mt-10' type="text" id="fname" placeholder="Name" />
                            <input  onChange={(e) =>{setPassword(e.target.value)}}  className='fill mt-10' type="text" id="fname" placeholder="Phone number" />
                            <div className='mt-10 bg-black log'>
                                <p className='text-white logt smallerText'>Log in</p>
                            </div>
                        </form>
                    </div>



                        <div onClick={()=>signIn()} className='buttonLogin mt-10'>
                            <p className="smallerText mt-2">Signup</p>
                        </div>
                    </div>
                </div>



                {/* IMAGE SECTION */}
                <div>
                    <img onClick={() => router.push('/')} className=" signUpImg mt-10" src="./kofi.jpg" />
                    <p className='smallerText text-4xl font-bold mt-4'>Life is not Perfect but Your Outfit Can be!</p>
                </div>
            </div>
        </div>
    )
}
