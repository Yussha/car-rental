import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

import styles from '../HomePage/home.module.css'

export default function RentalForm({ setIsLoginFormOpen }) {
    const [startDatePickup, setStartDatePickup] = useState(new Date());
    const [startDateReturn, setStartDateReturn] = useState(new Date());

    const handleBookNow = (e) => {
        e.preventDefault()

        setIsLoginFormOpen(true)
    }

    return (
        <section className={`${styles.customSectionSearh} mt-4 mb-10 rounded-md p-4 w-full`}>
            <form action="" >
                <ul >
                    <li className="mb-4">
                        <div>
                            <label className={styles.customLabel} htmlFor="">
                                Pickup Location
                            </label>
                            <div className="w-auto mt-2 z-10 flex items-center " style={{ backgroundColor: "#F2F7F6", borderRadius: '5px' }}>
                                <span className="text-lg pl-2" style={{ color: "#676767" }}>
                                    <CiLocationOn />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter City, Airport, or Address"
                                    style={{ backgroundColor: "#F2F7F6", color: "#676767", borderRadius: '5px' }}
                                    className="w-full pt-2 pb-2 pl-2 pr-8 outline-none flex-grow"
                                />
                            </div>
                        </div>
                    </li>

                    <li className={` mb-4`}>
                        <div>
                            <label className={`${styles.customLabel}`} htmlFor="">Pickup Date & Time</label>
                            <div className="w-auto mt-2 z-10 flex items-center " style={{ backgroundColor: "#F2F7F6", borderRadius: '5px' }}>
                                <span className="text-lg pl-2" style={{ color: "#676767" }}><CiCalendar /></span>
                                <DatePicker
                                    showTimeSelect
                                    dateFormat="Pp"
                                    selected={startDatePickup}
                                    onChange={(date) => setStartDatePickup(date)}
                                    className={`${styles.customDatePicker} rounded-sm outline-none`}
                                />
                            </div>
                        </div>
                    </li>

                    <li className={` mb-4`}>
                        <div>
                            <label className={`${styles.customLabel}`} htmlFor="">Return Date & Time</label>
                            <div className="w-auto mt-2 z-10 flex items-center" style={{ backgroundColor: "#F2F7F6", borderRadius: '5px' }}>
                                <span className="text-lg pl-2" style={{ color: "#676767" }}><CiCalendar /></span>
                                <DatePicker
                                    showTimeSelect
                                    dateFormat="Pp"
                                    selected={startDateReturn}
                                    onChange={(date) => setStartDateReturn(date)}
                                    className={`${styles.customDatePicker} rounded-sm outline-none`}
                                />

                            </div>
                        </div>
                    </li>
                </ul>

                <div className={`w-auto `}>
                    <button onClick={(e) => handleBookNow(e)} className={`${styles.customSearchBtn} w-full rounded-md pt-2 pb-2 pl-8 pr-8 flex
                     justify-center items-center gap-x-2`}> Book Now</button>
                </div>
            </form>
        </section>
    )
}