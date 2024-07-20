import img1 from '../../assets/testimonialImg1.jpg'
import img2 from '../../assets/testimonialImg2.jpg'
import img3 from '../../assets/testimonialImg3.jpg'

import { FaQuoteRight } from "react-icons/fa";

import styles from './home.module.css';

export default function Testimonial() {
    const testimonials = [
        {
            id: 1,
            img: img1,
            name: "Stepanie Hutchkiss",
            header: "Excellent Service! Car Rent Service!",
            text: "I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.",
        },

        {
            id: 2,
            img: img2,
            name: "Jovan Reels",
            header: "Excellent Service! Car Rent Service!",
            text: "We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.",
        },

        {
            id: 3,
            img: img3,
            name: "Kanesha Keyton",
            header: "Excellent Service! Car Rent Service!",
            text: "Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.",
        },
    ]
    return (
        <section className={`h-auto pb-24 h-auto pl-3 pr-3 xl:pl-20 xl:pr-20 `}>
            <div className='flex flex-col gap-y-3 sm:grid sm:grid-cols-2 sm:gap-x-3 sm:gap-y-3 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:h-auto' >
                {testimonials.map(tes => (
                    <div key={tes.id} className='relative rounded-lg w-full  lg:h-fit' style={{ backgroundColor: "#fff !important", cursor: "pointer" }} >
                        <div className={`${styles.overlay} absolute top-0 left-0 bottom-0 right-0 z-10 rounded-lg `}></div>
                        <img src={tes.img} alt="" className='rounded-lg w-full object-cover ' />
                        <div className='absolute top-0 z-20 p-8 ' >
                            <div className='flex justify-end'><FaQuoteRight style={{ color: "#fd7e14" }} className='text-4xl' /></div>
                            <div>
                                <h1 style={{ color: "#fff" }} className='font-bold text-lg pr-10 mb-3'>{tes.header}</h1>
                                <p style={{ color: "#fff" }} className='mb-5'>{tes.text}</p>
                                <span style={{ color: "#fff" }}>{tes.name}</span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}