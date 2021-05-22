import React from 'react'
import img from '../logo.svg'
import './css/Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <nav className='nav'>
                <div className='container'>
                    <div className='logo'>
                        <img src={img} alt='logo' />
                    </div>
                    <div className='product'>
                        <Link to='/'>
                            <h5 className='head'>Product</h5>
                        </Link>
                    </div>
                </div>
                <Link to='/cart'>
                    <div className='nav-btn'>
                        <button>My Cart</button>
                    </div>
                </Link>

            </nav>
        </>
    )
}

export default Navbar