import PagesHeader from "../../Components/PagesHeader"
import CarsLists from "./CarsLists"

import FilterNav from "./FilterNav"

import { FaFilter } from "react-icons/fa6";

import { useState, useEffect } from "react"

import { cars } from '../../Data/cars.js'

import { useSelector } from 'react-redux'

export default function Cars() {
    const copyCarsData = [...cars]
    const [showFilter, setShowFilter] = useState(false);
    const [filteredCars, setFilteredCars] = useState(copyCarsData);

    const categories = useSelector(state => state.rentalCarFunctionsReducer.selectedCategories)

    useEffect(() => {
        const filtered = categories.length === 0 ? copyCarsData : copyCarsData.filter(car => {
            const inSelectedBody = categories.includes(car.body)
            const inSelectedFuelType = categories.includes(car.fuelType)
            const inSelectedSeat = categories.includes(car.seat)
            const inSelectedTransmission = categories.includes(car.transmission)

            return inSelectedBody || inSelectedFuelType || inSelectedSeat || inSelectedTransmission
        })
        setFilteredCars(filtered)
    }, [categories])

    return (
        <div>
            {/* divider */}
            <div className="h-16"></div>

            <div>
                <PagesHeader>Cars</PagesHeader>

                <div className="mt-14 mb-14 pr-4 pl-4 sm:pr-8 sm:pl-8 lg:flex lg:flex-row lg:gap-x-10 xl:pr-20 xl:pl-20">
                    {/* filter btn */}
                    <div className="mb-4 lg:hidden">
                        <button onClick={() => setShowFilter(true)} style={{ border: "1px solid #676767" }} className="font-bold flex items-center gap-x-2 rounded-md p-2">Show Filter<FaFilter style={{ color: "#fd7e14" }} /></button>
                    </div>
                    {/* filter */}
                    <FilterNav setShowFilter={setShowFilter} showFilter={showFilter} />
                    {/* content */}
                    <CarsLists filteredCars={filteredCars} />
                </div>


            </div>
        </div>
    )
}