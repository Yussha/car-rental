//Components
import Navlinks from "./Navlinks"

import { useSelector } from 'react-redux'

export default function Navbar() {
    const screenWidth = useSelector(state => state.trackScreenWidth.screenWidth);

    return (
        <nav className={`fixed pr-4 pl-4 pt-2 pb-2 left-0 right-0 z-40 ${screenWidth >= 361 ? 'top-8' : 'top-0'}`}>
            <Navlinks />
        </nav>
    )
}