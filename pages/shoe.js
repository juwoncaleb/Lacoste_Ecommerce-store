import React,{useState} from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import Shoe from "../model/Shoe";
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';


export default function ShoePage({ shoeprod }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    console.log(shoeprod);
    const [prod, setProd] = useState(false)
    // this is used in client side cachng
    const { prod: data, status } = useQuery('prod', () => shoeprod);
    //LOADING SPINNER
    if (status === 'loading') return
    <div className='ml-auto mr-auto'>
        LOADING DATA

    </div>
    if (status === 'error') return
    <div>Error loading data</div>;
    if (prod && prod.length === 0) {
        setProd(true)
    }

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/')}>Shoe</span>  </p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    shoeprod.map((shoes) => (
                        <Link href={`/shoe/${shoes._id}`} passHref key={shoes._id}>
                            <div className='productGrid ' key={shoes._id}>
                                <img className='productImages' src={shoes.images} />
                                <br />
                                <p className='itemName'>{shoes.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {shoes.price}
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
        const allShoes = await Shoe.find();

        return {
            props: {
                shoeprod: JSON.parse(JSON.stringify(allShoes)),
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
