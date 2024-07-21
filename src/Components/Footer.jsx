import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="customFooter pt-20 pb-20 pr-3 pl-3 sm:pr-10 sm:pl-10 lg:pb-16 lg:pt-16">
            <div className="lg:grid lg:grid-cols-4 lg:gap-x-6">
                <div className="mb-10 lg:pl-10 lg:pr-10 lg:mb-0">
                    <h1 className="font-bold mb-4">About Dreams Rent</h1>
                    <p className="sm:pr-8 lg:pr-0">
                        Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.
                    </p>
                </div>

                <div className="mb-10 lg:pl-10 lg:pr-10 lg:mb-0">
                    <h1 className="font-bold mb-4">Contact Info</h1>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex items-center gap-x-4">
                            <FaLocationDot style={{ color: '#fd7e14' }} />
                            <span >312 Tapat st.</span>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <FaPhoneAlt style={{ color: '#fd7e14' }} />
                            <span>0123456789</span>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <MdOutlineEmail style={{ color: '#fd7e14' }} />
                            <span>contact@gmail.com</span>
                        </div>
                    </div>

                </div>

                <div className="mb-10 lg:pl-10 lg:pr-10 lg:mb-0">
                    <h1 className="font-bold mb-4">Quick Links</h1>
                    <ul className="flex flex-col gap-y-2">
                        <li><a href="">Home</a></li>
                        <li><a href="">Cars</a></li>
                        <li><a href="">Contact</a></li>

                    </ul>
                </div>

                <div className="lg:pl-10 lg:pr-10">
                    <h1 className="font-bold mb-4">Social Network</h1>
                    <div className="flex gap-x-4">
                        <span><FaFacebookF style={{ color: '#fd7e14' }} /></span>
                        <span><FaTwitter style={{ color: '#fd7e14' }} /></span>
                        <span><FaSquareInstagram style={{ color: '#fd7e14' }} /></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}