import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import Kid from "../model/Kid";
import { useRouter } from 'next/router'

export default function Kiddies ({ kidProduction }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/')}>Kid</span>  </p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    kidProduction.map((kk) => (
                        <Link href={`/kid/${kk._id}`} passHref key={kk._id}>
                            <div className='productGrid ' key={kk._id}>
                                <img className='productImages' src={kk.images} />
                                <br />
                                <p className='itemName'>{kk.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {kk.price}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        await dbConnect();
        const allKids = await Kid.find();

        return {
            props: {
                kidProduction: JSON.parse(JSON.stringify(allKids)),
            },
        };
    } catch (error) {
        console.log("cant fetch");
        return {
            props: {
                comfort: [],
            },
        };
    }
};
