import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navlinks() {
    const [navlinkShow, setNavlinkShow] = useState(false);

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

    const handleShowNavLinks = () => {
        setNavlinkShow(!navlinkShow);
    };

    return (
        <div className="flex justify-between items-center">
            <div>
                <img src="https://www.madebydesignesia.com/themes/rentaly/images/logo.png" alt="" />
            </div>
            <ul className={`custom-ul absolute left-0 right-0 flex flex-col justify-center items-center gap-y-4 ${navlinkShow ? 'open' : ''}`}>
                {navlinks.map(navlink => (
                    <li key={navlink.id}>
                        <Link to={navlink.path} className="custom-linkName">{navlink.name}</Link>
                    </li>
                ))}
            </ul>

            <button onClick={handleShowNavLinks} className="menuBtn text-lg"><GiHamburgerMenu /></button>
        </div>
    );
}
