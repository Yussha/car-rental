import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import styles from './contact.module.css';

export default function SocmedContact() {
    return (
        <div className={`${styles.socmedContactCard} mt-8 p-6 rounded-md h-fit `}>
            <h1 className="text-2xl font-bold">PH Office</h1>

            <ul className={`${styles.contactList} mt-4 flex flex-col gap-y-2`}>
                <li>
                    <span><FaLocationDot /></span>
                    <p className="text-lg">Location St. Caloocan City</p>
                </li>

                <li>
                    <span><FaPhoneAlt /></span>
                    <p>123456789</p>
                </li>

                <li>
                    <span><MdOutlineEmail /></span>
                    <p>contact@gmail.com</p>
                </li>
            </ul>
        </div>
    )

}