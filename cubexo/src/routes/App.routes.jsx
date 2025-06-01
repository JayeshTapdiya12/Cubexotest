import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";

const Approutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign' element={<SignUp />} />
                    <Route path='/addproduct' element={<AddProduct />} />
                    <Route path='/addproduct/:id' element={<SingleProduct />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Approutes
