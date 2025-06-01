import React, { useEffect } from 'react'
import Navbar from '../compoments/Navbar'
import { getCart } from '../Service/cartService'

const Cart = () => {


    const hello = async () => {
        const res = await getCart();
        console.log(res)
    }


    useEffect(() => {
        hello();
    })
    return (
        <>
            hello cart
            <Navbar />

        </>
    )
}

export default Cart
