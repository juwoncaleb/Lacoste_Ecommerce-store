import React, { useState, useEffect } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import { useQuery } from 'react-query';
import dbConnect from "../utils/Mongo";
import Product from "../model/Product";
import { useRouter } from 'next/router'

export default function SummerFineItem({ allProd }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    console.log(allProd);
    // this is used in client side cachng
    const { prod: data, status } = useQuery('prod', () => allProd);
    //LOADING SPINNER
    
   
    return (
        <div>
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>SUMMER FINE SELECTON</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    allProd.map((product) => (
                        <Link href={`/summerFineItem/${product._id}`} passHref key={product._id}>
                            <div className='productGrid ' key={product._id}>
                                <img className='productImages' src={product.images} />
                                <br />
                                <p className='itemName'>{product.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {product.price}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    </div>
    )
}

export const getServerSideProps = async () => {
    try {
        await dbConnect();
        console.log("fetched server side");
        const allSum = await Product.find();

        return {
            props: {
                allProd: JSON.parse(JSON.stringify(allSum)),
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

