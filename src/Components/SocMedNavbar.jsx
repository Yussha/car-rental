import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SocMedNavbar() {
    return (
        <div className="custom-socmedNav fixed pr-4 pl-4 pt-2 pb-2 left-0 right-0 top-0 z-40">
            <ul className="flex justify-end gap-x-4">
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