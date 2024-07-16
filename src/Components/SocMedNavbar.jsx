import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SocMedNavbar() {
    return (
        <div className="custom-socmedNav">
            <ul className="flex justify-end pr-4 pl-4">
                <li>
                    <a href=""><FaFacebookF /></a>
                </li>
                <li>
                    <a href=""><FaTwitter /></a>
                </li>
                <li>
                    <a href=""><FaInstagram /></a>
                </li>
            </ul>
        </div>
    )
}