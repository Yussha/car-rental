import { IoMdRocket } from "react-icons/io"

import RentalForm from './RentalForm'
import PagesHeader from "../../Components/PagesHeader"

import styles from './rental.module.css'

import { useSelector } from 'react-redux'

export default function Rental() {
    const carItem = useSelector(state => state.rentalCarFunctionsReducer.carItemObj)

    return (
        <div className="h-auto">
            {/* divider */}
            <div className="h-16"></div>

            <div>
                {/* Header */}
                <PagesHeader>Vehicle Fleet</PagesHeader>

                <div className="lg:grid lg:grid-cols-2">
                    {/* content */}
                    <div className="mt-14 mb-14 pr-3 pl-3 sm:pr-14 sm:pl-14">
                        <div className="mb-10">
                            <img src={carItem.img} alt="" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold">{carItem.name}</h1>
                            <p className="mt-6">{carItem.description}</p>

                            <div className="mt-6">
                                <h1 className="text-xl font-bold">Specifications</h1>
                                <ul>
                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>Body</h6>
                                        <span className="font-bold">{carItem.body}</span>
                                    </li>

                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>Seat</h6>
                                        <span className="font-bold">{carItem.seat}</span>
                                    </li>

                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>Door</h6>
                                        <span className="font-bold">{carItem.door}</span>
                                    </li>

                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>Luggage</h6>
                                        <span className="font-bold">{carItem.luggage}</span>
                                    </li>

                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>FuelType</h6>
                                        <span className="font-bold">{carItem.fuelType}</span>
                                    </li>

                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>Year</h6>
                                        <span className="font-bold">{carItem.year}</span>
                                    </li>

                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>Mileage</h6>
                                        <span className="font-bold">{carItem.mileage}</span>
                                    </li>

                                    <li style={{ borderBottom: '1px solid #676767' }} className="flex justify-between mt-3 pb-2">
                                        <h6 style={{ color: "#676767" }}>Transmission</h6>
                                        <span className="font-bold">{carItem.transmission}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* booking form section */}
                    <div className="mb-14 pr-3 pl-3 sm:pr-14 sm:pl-14 lg:mt-14 ">
                        {/* price display */}
                        <div style={{ backgroundColor: "#676767" }} className="flex flex-col items-center pt-8 pb-8 rounded-md">
                            <h1>Daily rate</h1>
                            <span className="font-bold text-6xl">${carItem.price}</span>
                        </div>

                        {/* form */}
                        <RentalForm />

                    </div>

                </div>



            </div>
        </div>
    )
}