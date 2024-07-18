import styles from './home.module.css';

import { BiSolidLike } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

import SectionSearch from "./SectionSearch";

export default function Hero() {
    return (
        <section className={`${styles.customHero} h-auto lg:relative`}>
            <div style={{ backgroundColor: '#fff' }} className='rounded-full bg-red-900 flex gap-x-2 p-3 mb-4 w-fit'>
                <span style={{ color: '#fd7e14' }}>
                    <BiSolidLike />
                </span>
                <p className='text-sm'>
                    100% Trusted car rental platform in the World
                </p>
            </div>

            <div className={`heroText lg:grid lg:grid-cols-2`}>
                <div>
                    <h1 className='font-bold text-4xl mb-4 xl:text-6xl'>
                        <span style={{ color: '#fd7e14' }}>Find Your Best</span>
                        <br />
                        Dream Car for Rental
                    </h1>

                    <p style={{ color: '#676767', fontWeight: '500', lineHeight: '23px' }} className='text-sm mb-8 lg:text-left '>
                        Experience the ultimate in comfort, performance, and sophistication with our luxury car rentals. From sleek sedans and stylish coupes to spacious SUVs and elegant convertibles, we offer a range of premium vehicles to suit your preferences and lifestyle.
                    </p>

                    <button className={`${styles.viewCarsBtn} flex items-center justify-center gap-x-2`}>
                        View all Cars
                        <span>
                            <FaArrowRightLong />
                        </span>
                    </button>
                </div>

                <div className='hidden lg:block'>
                    <img className='max-w-full w-auto' src="https://dreamsrent.dreamstechnologies.com/html/assets/img/car-right.png" alt="" />
                </div>
            </div>

            <SectionSearch />
        </section>
    )
}