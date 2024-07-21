import SectionTitle from "../../Components/SectionTitle"
import SectionSubtitle from "../../Components/SectionSubtitle"

import styles from './home.module.css';

import { FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <section className={`${styles.customContactInfo} h-auto pt-8 pb-8 h-auto pl-3 pr-3 lg:pl-20 lg:pr-20 lg:pt-4 lg:pb-4 xl:pl-48 xl:pr-48 lg:grid lg:grid-cols-2 lg:items-center`}>
            <div className="flex flex-col items-center gap-y-2">
                <div style={{ backgroundColor: 'rgba(216, 85, 14, 0.877)' }} className="w-fit p-2 rounded-md">
                    <h2 className="text-center ">Call us for further information</h2>
                </div>

                <h1 className='customSectionTitle text-4xl text-center lg:text-left'>Rentaly customer care is here to help you anytime.</h1>
            </div>

            <div className="mt-10 flex flex-col items-center">
                <span className="text-5xl"><FaPhoneAlt /></span>
                <p style={{ letterSpacing: '5px' }} className="mt-4 mb-2">CALL US NOW</p>
                <span className="block text-3xl font-bold">0123456789</span>
                <button className={`${styles.contactBtn} mt-4 p-2 pl-4 pr-4`}>Contact Us</button>
            </div>
        </section>
    )
}