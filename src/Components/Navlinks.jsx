import { Link } from "react-router-dom";

import { IoClose } from "react-icons/io5";

// img
import logo from '../assets/dreamsRentLogo.png'

export default function Navlinks({ toggleNavLinks, showNavlinks }) {
    const navlinks = [
        {
            id: 1,
            name: 'Home',
            path: '/car-rental',
        },
        {
            id: 2,
            name: 'Cars',
            path: '/cars',
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact',
        },
    ];

    return (
        <div className={`navLinks fixed w-60 top-0 bottom-0 ease-in duration-300  ${showNavlinks ? 'left-0' : '-left-96'} lg:static lg:bg-transparent lg:shadow-none`}>
            <div className={`menuHeader flex items-center justify-between p-4 lg:hidden`}>
                <div className={`navHeader flex items-center gap-x-2`}>
                    <img src={logo} alt="" />
                    <h1 className={`font-bold text-lg`}><span>DREAMS</span> RENT</h1>
                </div>
                <button onClick={toggleNavLinks} className={`closeBtn text-xl`} ><IoClose /></button>
            </div>
            <ul className="p-4 lg:flex lg:items-center lg:justify-end lg:gap-x-12 lg:p-0">
                {navlinks.map(navlink => (
                    <li key={navlink.id} className="pb-4 lg:p-0">
                        <Link className="links" to={navlink.path}>{navlink.name}</Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}
