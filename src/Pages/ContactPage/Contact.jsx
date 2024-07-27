import PagesHeader from "../../Components/PagesHeader"

import ContactForm from "./ContactForm"
import SocmedContact from "./SocmedContact"

export default function Contact({ setIsLoginFormOpen, isLoginFormOpen }) {
    return (
        <div>
            {/* divider */}
            <div className="h-16"></div>

            <div>
                <PagesHeader>Contact Us</PagesHeader>

                <div className="mt-14 mb-14 pr-4 pl-4 sm:pr-20 sm:pl-20 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:pr-20 lg:pl-20">
                    {/* question form */}
                    <ContactForm setIsLoginFormOpen={setIsLoginFormOpen} isLoginFormOpen={isLoginFormOpen} />

                    {/* socmed contact card */}
                    <SocmedContact />
                </div>


            </div>
        </div>
    )
}