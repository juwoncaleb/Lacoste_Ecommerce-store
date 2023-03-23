import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'

function Order({ allOrder }) {
    // a state that handles the display of the product in the ui
    const [orderList, setOrderList] = useState(allOrder)
    const router = useRouter()
    

    // This handle the deletion of an item from the UI AND DATABASE
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("/api/orders/" + id)
            // this handles the delete in the UI
            setOrderList(orderList.filter((orderItem) => orderItem._id !== id))

            
        } catch (error) {
            console.log(error);
        }
    }




    return (

        <div className='productAdmin'>
            <div className='flex justify-between productTabOne pt-10'>
                <input type='text' className="searchItem ml-10" placeholder='Search' />

                <div className='flex  mr-10'>
                    <img className="adminProfile  " src="boxers.png" />
                    <div className='ml-4'>
                        <p>Juwon</p>
                        <p>Admin</p>
                    </div>
                    <select className='profileView ml-4'>
                        <option value="10000">Something</option>
                        <option value="100">Other thing</option>
                        <option value="1">The last option</option>
                    </select>
                </div>

            </div>
            <div className='flex  ml-4 mr-4 bg-white productHeader1 justify-between mt-10'>
                <div className='mt-2 mb-4'>
                    <select className='newCategory' id="cars" name="cars">
                        <option value="volvo">Category</option>
                        <option value="saab">Women</option>
                        <option value="fiat">Kids</option>
                        <option value="audi">Caps</option>
                        <option value="audi">Discount</option>
                    </select>
                    <select className='newCategory ' id="cars" name="cars">
                        <option value="volvo">Status</option>
                        <option value="saab">Women</option>
                        <option value="fiat">Kids</option>
                        <option value="audi">Caps</option>
                        <option value="audi">Discount</option>
                    </select><select className='newCategory ' id="cars" name="cars">
                        <option value="volvo">Price</option>
                        <option value="saab">Women</option>
                        <option value="fiat">Kids</option>
                        <option value="audi">Caps</option>
                        <option value="audi">Discount</option>
                    </select>
                </div>


            </div>
            <div className='bg-white ml-4 mr-4'>
                <div className='flex justify-start ml-10 mt-6'>
                    <p className='text-center'>ORDER</p>

                </div>

                <div className='flex justify-around productHeader mt-4 pt-2'>
                    <p>ID</p>
                    <p>Customer</p>
                    <p>Total</p>
                    <p>Payment</p>
                    <p>Status</p>
                    <p>Actions</p>
                </div>
                {
                    allOrder.map((orderItem) => (
                        <div className='flex justify-around productHeader mt-4 pt-2' key={orderItem._id}>
                            <p>{orderItem._id}</p>
                            <p>{orderItem._id}</p>
                            <p>{orderItem._id}</p>
                            <p>{orderItem._id}</p>
                            <p>{orderItem._id}</p>
                            <div className='flex  justify-around crud'>
                                <img className='editIcon' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-edit-mintab-for-ios-becris-lineal-becris.png" />
                                <img onClick={()=> handleDelete(orderItem._id)} className='editIcon ' src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png" />
                            </div>
                        </div>


                    ))
                }


                <div className='flex justify-between mt-10 ml-10 mr-10'>
                    <select className='profileView'>
                        <option value="10000">Something</option>
                        <option value="100">Other thing</option>
                        <option value="1">The last option</option>
                    </select>

                    <p>Pagintion</p>
                </div>
            </div>
        </div>

    )
}

export default Order

export async function getServerSideProps() {
    const prodRes = await fetch("https://lacostestore.vercel.app/products")
    const data = await prodRes.json()
    console.log(data);
    return {
        props: {
            allOrder: data
        }
    }
}

