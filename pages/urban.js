import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import Urban from "../model/Office";
import { useRouter } from 'next/router'

export default function UrbanSection({ Urbans }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>URBAN</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    Urbans.map((urbanItem) => (
                        <Link href={`/retro/${urbanItem._id}`} passHref key={urbanItem._id}>
                            <div className='productGrid ' key={urbanItem._id}>
                                <img className='comImage' src={urbanItem.images} />
                                <br />
                                <p className='itemName'>{urbanItem.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {urbanItem.price}
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
        const allUrban = await Urban.find();

        return {
            props: {
                Urbans:  JSON.parse(JSON.stringify(allUrban)),
            },
        };
    } catch (error) {
        console.log("cant fetch");
        return {
            props: {
                offices: [],
            },
        };
    }
};
