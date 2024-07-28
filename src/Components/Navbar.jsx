//Components
import Navlinks from "./Navlinks"

import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useState } from "react";

// img
import logo from '../assets/dreamsRentLogo.png'

import { Link } from "react-router-dom";

export default function Navbar({ setIsLoginFormOpen }) {
    const [showNavlinks, setShowNavlinks] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()

        setIsLoginFormOpen(true)
    }

    const toggleNavLinks = () => {
        setShowNavlinks(!showNavlinks)
    }

    return (
        <nav className={`fixed left-0 right-0 flex justify-between p-4 sm:flex sm:gap-x-8 sm:items-center lg:justify-between`}>
            <div className="flex gap-x-4 lg:hidden">
                <button onClick={toggleNavLinks} className="menu sm:text-4xl lg:hidden"><HiOutlineMenuAlt2 /></button>

                <Link to='/'>
                    <div className="flex items-center gap-x-2 lg:hidden">
                        <img src="https://dreamsrent.dreamstechnologies.com/html/assets/img/logo-small.png" alt="" />
                        <h1 className={`font-bold text-lg sm:text-2xl hidden sm:block`}><span style={{ color: "#fd7e14" }}>DREAMS</span>RENT</h1>
                    </div>
                </Link>


            </div>

            <Link to='/'>
                <div style={{ cursor: 'pointer' }} className="hidden lg:block">
                    <div className={`navHeader hidden sm:flex sm:items-center sm:gap-x-2`}>
                        <img src={logo} alt="" />
                        <h1 className={`font-bold text-lg sm:text-2xl`}><span>DREAMS</span> RENT</h1>
                    </div>
                </div>
            </Link>

            <Navlinks setIsLoginFormOpen={setIsLoginFormOpen} toggleNavLinks={toggleNavLinks} showNavlinks={showNavlinks} />

            <div>
                <button onClick={(e) => handleLogin(e)} style={{ color: '#fff' }} className="loginBtn rounded-md font-bold">Sign in</button>
            </div>
        </nav>
    )
}