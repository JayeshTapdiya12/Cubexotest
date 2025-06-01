import React, { useState } from 'react'

import { addProduct } from '../Service/productService'
import Navbar from '../compoments/Navbar';
const AddProduct = () => {

    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        // e.preventDeafult();

        if (name === "" || des === "" || price === "") {
            alert("fill the fields");
        }
        const res = await addProduct(name, des, price);
        console.log(res)
        return res;
    }


    return (
        <>
            <Navbar />

            {/* <form onSubmit={handleSubmit}> */}
            <label >Name Of the Product</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name here' />
            <br />
            <label >Descrioption Of the Product</label>
            <input type="text" value={des} onChange={(e) => setDes(e.target.value)} placeholder='enter your description here' />
            <br />
            <label >price Of the Product</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='enter your price here' />
            <br />


            <button onClick={handleSubmit}>submit</button>
            {/* </form> */}
        </>
    )
}

export default AddProduct
