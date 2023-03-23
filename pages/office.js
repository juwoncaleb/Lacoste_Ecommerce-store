import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import dbConnect from "../utils/Mongo";
import Office from "../model/Office";
import { useRouter } from 'next/router'

export default function Offic({ offices }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>OFFICE</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                <p>{ }</p>
                {
                    offices.map((officeItem) => (
                        <Link href={`/office/${officeItem._id}`} passHref key={officeItem._id}>
                            <div className='productGrid ' key={officeItem._id}>
                                <img className='comImage' src={officeItem.images} />
                                <br />
                                <p className='itemName'>{officeItem.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {officeItem.price}
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
        const allOffice = await Office.find();

        return {
            props: {
                offices: JSON.parse(JSON.stringify(allOffice)), 
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
