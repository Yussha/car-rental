import SectionTitle from "../../Components/SectionTitle"
import SectionSubtitle from "../../Components/SectionSubtitle"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import styles from './home.module.css';
import './swiperSlide.css'

import { IoPersonOutline } from "react-icons/io5";
import { LuLuggage } from "react-icons/lu";
import { GiCarDoor } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";

import { cars } from '../../Data/cars.js'

import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { rentNowBtn } from "../../ReduxStore/RentalSlice.jsx";

export default function VehicleFleet() {
    const displayCars = cars.slice(0, 6);

    const dispatch = useDispatch();

    const handleViewDetailCar = (item) => {
        dispatch(rentNowBtn(item))
    }

    return (
        <section className={`h-auto mt-20 pb-24 h-auto pl-3 pr-3 xl:pl-20 xl:pr-20 lg:mt-32`}>
            <div className="flex flex-col items-center gap-y-2 mb-10">
                <SectionSubtitle>Enjoy Your Ride</SectionSubtitle>
                <SectionTitle>Our Vehicle Fleet</SectionTitle>

                <p className={`text-center mt-4 sm:w-9/12 lg:w-6/12 `} style={{ color: '#676767' }}>
                    Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.
                </p>
            </div>

            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                navigation={true}
                modules={[Navigation]}
                className={`${styles.mySwiper}`}>
                {displayCars.map(car => (
                    <SwiperSlide key={car.id}>
                        <div>
                            <img src={car.img} alt="" />
                        </div>

                        <div style={{ borderBottom: "1px solid #676767" }} className="mt-6 pl-4 pr-4 pb-6">
                            <h1 style={{ color: '#201F1D' }} className="font-bold text-lg">{car.name}</h1>

                            <div className="mt-4 flex gap-x-2 w-fit">
                                <div className="w-fit flex items-center gap-x-1">
                                    <IoPersonOutline style={{ color: "#fd7e14" }} />
                                    <span style={{ color: "#201F1D" }} className="font-bold">{car.seat}</span>
                                </div>

                                <div className="w-fit flex items-center gap-x-1">
                                    <LuLuggage style={{ color: "#fd7e14" }} />
                                    <span style={{ color: "#201F1D" }} className="font-bold">{car.luggage}</span>
                                </div>

                                <div className="w-fit flex items-center gap-x-1">
                                    <GiCarDoor style={{ color: "#fd7e14" }} />
                                    <span style={{ color: "#201F1D" }} className="font-bold">{car.door}</span>
                                </div>

                                <div className="w-fit flex items-center gap-x-1">
                                    <FaCarAlt style={{ color: "#fd7e14" }} />
                                    <span style={{ color: "#201F1D" }} className="font-bold">{car.body}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pl-4 pr-4 flex justify-between">
                            <div>
                                <h1 style={{ color: "#676767" }}>Daily rate from</h1>
                                <span tyle={{ color: "#201F1D" }} className="font-bold text-2xl">${car.price}</span>
                            </div>

                            <div className="flex items-center">
                                <Link to='/rental'>
                                    <button onClick={() => handleViewDetailCar(car)} className={`${styles.rentNowBtn} rounded-md `}>Rent Now</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}