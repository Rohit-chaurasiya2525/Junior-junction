
import React from 'react'
import { Link } from 'react-router-dom'

import Hero from './Hero'
const Navbar = () => {
    return (
        <>
        <div className='bg-green-900'>
            <div className="navbar text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <Link to="/"><li>Home</li></Link> 
                                <Link to="/about"><li>About Us</li></Link> 
                                <Link to="/contact"><li>Contct Us</li></Link>  
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Junior Junction</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex gap-8'>
                        <Link to = "/job">Senior</Link>
                             <Link to="/"><li>Home</li></Link>  
                             <Link to="/about"><li>About Us</li></Link> 

                             <Link to="/contact"><li>Contct Us</li></Link>  
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
     <Hero/>
        </>
    )
}

export default Navbar
