import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import { useRouter } from 'next/router'
import Casual from '../model/Casual'

export default function CausalProd ({ casualItems }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>OFFICE</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    casualItems.map((cas) => (
                        <Link href={`/office/${cas._id}`} passHref key={cas._id}>
                            <div className='productGrid ' key={cas._id}>
                                <img className='comImage' src={cas.images} />
                                <br />
                                <p className='itemName'>{cas.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {cas.price}
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
        const allCasual = await Casual.find();

        return {
            props: {
                casualItems: JSON.parse(JSON.stringify(allCasual)),
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
