import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Shoe from "../../model/Shoe";

export default function Item({ shoeItem }) {
    console.log(shoeItem);
    const dispatch = useDispatch()
    const router = useRouter()


    let price = shoeItem.price
    let [amount, setAmount] = useState(1)
    const [itemSize, setItemSize] = useState("");
    console.log(itemSize);

    const click = () => {
        alert("Added to cart!");

        dispatch(addProduct({ ...shoeItem, itemSize, amount, price }))
    }

    const cart = useSelector((state) => state.cart)
    console.log(cart);
    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Shoe</span>   <span className='GreyText ml-2 cursor-pointer' onClick={() => router.push('/summerFine')}></span></p>
            <p className='itemHeader_Main text-5xl '>{shoeItem.name}</p>
            <p className='font-light mt-4 text-4xl'>{shoeItem.category}</p>
            <p className='font-light mt-4 text-3xl'>${shoeItem.price}</p>
            <img className='ml-auto mr-auto mt-10 prodImg' src={shoeItem.images} />
            <div className='ml-auto mr-auto mt-4 description'>
                <hr className='description_line mt-6' />
                <p>Sizes</p>

                <div className='sizePrice'>
                    <div className="flex justify-center ml-6  mt-2">
                        <p
                            onClick={() => {
                                setItemSize("Extra-Large");
                            }}
                            className="xl cursor-pointer mr-10"
                        >
                            XL
                        </p>
                        <p
                            onClick={() => {
                                setItemSize("Large");
                            }}
                            className="l cursor-pointer mr-10"
                        >
                            L
                        </p>
                        <p
                            onClick={() => {
                                setItemSize("Meduim");
                            }}
                            className="m cursor-pointer mr-10"
                        >
                            M
                        </p>
                        <p
                            onClick={() => {
                                setItemSize("Small");
                            }}
                            className="s cursor-pointer mr-10"
                        >
                            S
                        </p>

                    </div>
                    <p className="  smallerText font-semibold	count"><span onClick={() => setAmount(amount++)} className="cursor-pointer">+</span>{amount} <span className="cursor-pointer" onClick={() => setAmount(amount--)}> -</span></p>
                    <p className='itemsize mt-1 '>{itemSize}</p>

                </div>

                <div onClick={click} className='bg-black bag mt-2 cursor-pointer'>
                    <p className='text-center text-white bagText '>Add to bag</p>
                </div>
                <hr className='description_line' />
                <p className='text-left mt-6'>Description</p>
                <p className='desc mt-6'>

                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                </p>
                <div className='flex mt-4'>
                    <img className='laundry pr-4' src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-bleach-textile-care-those-icons-lineal-those-icons-2.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/material-outlined/24/000000/ironing.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-hanger-clothes-and-fashion-kiranshastry-lineal-color-kiranshastry.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/external-others-pike-picture/50/000000/external-Detergent-cleaning-others-pike-picture-2.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/000000/external-washing-machine-smart-home-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" />        </div>
            </div>
            <Footer />
        </div>
    )
}


export const getServerSideProps = async ({ query }) => {
    const { id } = query
    console.log(id);
    try {
        await dbConnect();
        const shoee = await Shoe.findById(id)
        return {
            props: {
                shoeItem: JSON.parse(JSON.stringify(shoee)), // <== here is a solution
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                comfort: [],
            },
        };
    }

};


