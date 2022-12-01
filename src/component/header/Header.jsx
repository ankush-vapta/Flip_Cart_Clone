
import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {


    return (
        <>
            <div className='navbar1'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contect">Contect</Link>
                <Link to="/account">Logout</Link>
            </div>

        </>
    )
}

export default Header