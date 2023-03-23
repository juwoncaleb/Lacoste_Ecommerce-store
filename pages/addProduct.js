import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';

export default function AddProduct() {

    // STATE MANAGEMENT 
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubcategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setdescription] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [stocks, setStocks] = useState('')
    const [images, setImages] = useState('')
    const [files, setFiles] = useState([])
    console.log(name, price, images);
    useEffect(() => {
        console.log(files);
        console.log();
    }, [files])

    // DRAG AND DROP FEATURE , AUTO SEND TO CLOUDINARY
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                setFiles(prevState => [...prevState, reader.result])
            }
            reader.readAsDataURL(file)
        })
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


    //SEND TO MONGO DATA BASE
    const submitComment = async () => {
        // this is to find where we want to post int
        await fetch('/api/casual', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                quantity,
                stocks,
                totalPrice,
                images,
                description,
                category,
                subCategory,
                price
            }),
        })

        let data = await res.json()

    }


    const refreshPage = () => {
        window.location.reload();
    }
    const uploadImages = async () => {
        const data = new FormData()
        data.append('file', files)
        data.append("upload_preset", "uploads")
        const upload = await axios.post("https://api.cloudinary.com/v1_1/ddjlsw268/image/upload", data)
        const { url } = upload.data
        let newUrl = url
        setImages(newUrl)

    }
console.log(images);



    return (
        <div className='addproduct'  >
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
            <div className=''>

                <p className='text-start mb-20 mt-10  addproductText text-4xl'>Add Product</p>


                {/* UPLOAD IMAGES */}
                <div className='flex mb-20 justify-around'>

                    <div>
                        <div className='uploadImage' {...getRootProps()}>
                            <img className='mt-40 ml-auto mr-auto iageIcon' src="https://img.icons8.com/dotty/80/000000/image--v1.png" />
                            <p className='mt-4'>Drag images here or upload from your computer</p>
                            <input {...getInputProps()} />

                        </div>

                        {files.length > 0 && <div>
                            {files.map((file, index) =>
                                <div className='mt-20 flex justify-around' key={Math.random} >
                                    <img className='uploadimages' src={file} key={index} />
                                    <p onClick={uploadImages} className='headerText cursor-pointer'>UPLOAD</p>
                                </div>
                            )
                            }
                        </div>

                        }
                    </div>

                    <div className='sendDb'>
                        <form action="/action.php">
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Moncler , Gucci" value={name} onChange={(e) => setName(e.target.value)} />
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Subcategory" value={subCategory} onChange={(e) => setSubcategory(e.target.value)} />
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Stocks" value={stocks} onChange={(e) => setStocks(e.target.value)} />


                            <br />
                            <input className='fillOrder mt-10' type="text" id="lname" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <textarea className='fillOrder mt-10' id="txtid" name="txtname" rows="8" cols="100" maxLength="200" placeholder='Description' value={description} onChange={(e) => { setdescription(e.target.value) }} >

                            </textarea>
                            <br />
                            <div onClick={() => { submitComment(); refreshPage(); }} className='Submitt pl-auto pr-auto mt-4 cursor-pointer'>
                                <p className='mt-1'>Send to Database</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


