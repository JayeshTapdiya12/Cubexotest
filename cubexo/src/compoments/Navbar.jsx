import React, { useState, } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const logout = async () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    // console.log(seller)


    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <NavLink to={'/'} className="navbar-brand">   Navbar</NavLink>
                <form className="form-inline">
                    {token ?

                        <div>
                            <NavLink to={'/addproduct'}> <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >AddProduct</button></NavLink>

                            {/* <div> */}
                            <NavLink to={'/cart'}>  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >cart</button></NavLink>
                            {/* <NavLink to={'/addproduct'}> <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >AddProduct</button></NavLink> */}
                            <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={logout}>logout</button></div>
                        :
                        <NavLink to={'/login'} ><button className="btn btn-outline-success my-2 my-sm-0" type="submit">login</button> </NavLink>}
                </form>
            </nav>
        </>
    )
}

export default Navbar
