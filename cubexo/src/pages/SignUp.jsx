import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserSing } from '../Service/userService';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [seller, setSeller] = useState('false');
    console.log(seller)
    const handleSubmit = async (e) => {
        // e.preventDeafult();

        if (email === "" || password === "" || name === "") {
            alert("enter the details")
        } else {
            const res = await UserSing(name, email, password, seller);
            return res;
        }

        console.log(email, password, name)
    }
    return (
        <>hello
            <NavLink to={'/login'}><button>Login</button></NavLink>
            <h1>signUp</h1>
            {/* <form action="" onSubmit={handleSubmit}> */}
            <label htmlFor="">Name</label>
            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your email here' />
            <br />
            <label htmlFor="">Email</label>

            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email here' />
            <br />
            <label htmlFor="">Password</label>

            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' />

            <br />
            <label htmlFor="">is seller </label>
            <br />
            <label htmlFor="false">true</label>
            <input type="checkbox" id="vehicle1" value="true" onChange={(e) => setSeller(e.target.value)} />
            <br />
            <label htmlFor="false">false</label>
            <input type="checkbox" id="vehicle1" value="false" onChange={(e) => setSeller(e.target.value)} />

            <br />
            <button onClick={handleSubmit}>submit</button>
            {/* </form> */}

        </>
    )
}

export default SignUp
