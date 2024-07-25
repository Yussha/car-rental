import { IoPersonOutline } from "react-icons/io5";
import { LuLuggage } from "react-icons/lu";
import { GiCarDoor } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

import styles from './cars.module.css';

import { useDispatch } from 'react-redux'
import { rentNowBtn } from "../../ReduxStore/RentalSlice.jsx";

export default function CarsLists({ filteredCars }) {
    const dispatch = useDispatch();

    const handleViewDetailCar = (item) => {
        dispatch(rentNowBtn(item))
    }

    return (
        <div className="flex flex-col gap-y-10 sm:grid sm:grid-cols-2 sm:gap-8 xl:grid-cols-3 h-fit">
            {filteredCars.map(copyCar => (
                <div key={copyCar.id} className={`${styles.customCardCarList}`}>
                    <div>
                        <img src={copyCar.img} alt="" />
                    </div>

                    <div style={{ borderBottom: "1px solid #676767" }} className="mt-6 pl-4 pr-4 pb-6">
                        <h1 style={{ color: '#201F1D' }} className="font-bold text-lg">{copyCar.name}</h1>

                        <div className="mt-4 flex gap-x-2 w-fit">
                            <div className="w-fit flex items-center gap-x-1">
                                <IoPersonOutline style={{ color: "#fd7e14" }} />
                                <span style={{ color: "#201F1D" }} className="font-bold">{copyCar.seat}</span>
                            </div>

                            <div className="w-fit flex items-center gap-x-1">
                                <LuLuggage style={{ color: "#fd7e14" }} />
                                <span style={{ color: "#201F1D" }} className="font-bold">{copyCar.luggage}</span>
                            </div>

                            <div className="w-fit flex items-center gap-x-1">
                                <GiCarDoor style={{ color: "#fd7e14" }} />
                                <span style={{ color: "#201F1D" }} className="font-bold">{copyCar.door}</span>
                            </div>

                            <div className="w-fit flex items-center gap-x-1">
                                <FaCarAlt style={{ color: "#fd7e14" }} />
                                <span style={{ color: "#201F1D" }} className="font-bold">{copyCar.body}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pl-4 pr-4 flex justify-between">
                        <div>
                            <h1 style={{ color: "#676767" }}>Daily rate from</h1>
                            <span tyle={{ color: "#201F1D" }} className="font-bold text-2xl">${copyCar.price}</span>
                        </div>

                        <div className="flex items-center">
                            <Link to='/rental'>
                                <button onClick={() => handleViewDetailCar(copyCar)} className={`${styles.rentNowBtn} rounded-md `}>Rent Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}