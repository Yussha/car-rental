//Components
import Navlinks from "./Navlinks"

import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useState } from "react";

// img
import logo from '../assets/dreamsRentLogo.png'

export default function Navbar() {
    const [showNavlinks, setShowNavlinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavlinks(!showNavlinks)
    }

    return (
        <nav className={`fixed left-0 right-0 grid grid-cols-2 p-4 sm:flex sm:gap-x-8 sm:items-center lg:justify-between`}>
            <button onClick={toggleNavLinks} className="menu sm:text-4xl lg:hidden"><HiOutlineMenuAlt2 /></button>

            <div style={{ cursor: 'pointer' }}>
                <div className={`navHeader hidden sm:flex sm:items-center sm:gap-x-2`}>
                    <img src={logo} alt="" />
                    <h1 className={`font-bold text-lg sm:text-2xl`}><span>DREAMS</span> RENT</h1>
                </div>
                <img className="sm:hidden" src="https://dreamsrent.dreamstechnologies.com/html/assets/img/logo-small.png" alt="" />
            </div>
            <Navlinks toggleNavLinks={toggleNavLinks} showNavlinks={showNavlinks} />
        </nav>
    )
}