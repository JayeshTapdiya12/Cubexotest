import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Userlogin } from '../Service/userService';
import Navbar from '../compoments/Navbar';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seller, setSeller] = useState('')
    const naviagte = useNavigate();

    // console.log(res?.data?.data?.isSeller)
    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)

        if (email === "" || password === "") {
            alert("enter email and password")
        } else {

            const res = await Userlogin(email, password);
            localStorage.setItem('token', res?.data?.data?.token)
            console.log(res)
            console.log(res?.data?.data)
            const token = localStorage.getItem('token');
            setSeller(res?.data?.data?.isSeller)

            if (token) {
                naviagte('/')
            }
        }


    }

    // console.log(email)
    return (
        <>
            <Navbar />
            <NavLink to={'/sign'}> <button >SignUp</button></NavLink>

            <h1>login page</h1>


            <form onSubmit={handelSubmit} >
                <label>Enter your email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email here' />
                <br />
                <label>Enter your password</label>

                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='enter your password' />
                <button onClick={handelSubmit}></button>
            </form>

        </>
    )
}

export default Login
