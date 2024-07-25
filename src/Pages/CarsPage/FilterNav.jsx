import { IoMdClose } from "react-icons/io";

import useUniqueProperties from '../../customHooks/useUniqueProperties.jsx';

import styles from './cars.module.css'

import { useDispatch } from 'react-redux'

import { addToSelectedCategory } from '../../ReduxStore/RentalSlice.jsx';

import { cars } from '../../Data/cars.js'

export default function FilterNav({ showFilter, setShowFilter }) {
    // unique category
    const { uniqueCategoryBody, uniqueFuelType, uniqueSeat, uniqueTransmission } = useUniqueProperties(cars);
    const dispatch = useDispatch()

    const addToSelectedCategoryDispatch = (e, category) => {
        const isChecked = e.target.checked
        dispatch(addToSelectedCategory({
            isChecked,
            category
        }))
    };

    return (
        <div className={`${styles.customFilterCard} w-60 p-4 fixed top-0 bottom-0 overflow-y-scroll ease-in duration-300 ${showFilter ? 'left-0' : '-left-96'} lg:static lg:h-fit lg:z-0 lg:overflow-visible`}>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-lg font-bold'>Car Filter</h1>
                <button onClick={() => setShowFilter(false)} className='text-xl lg:hidden'><IoMdClose /></button>
            </div>

            <div>
                {/* for body category */}
                <div>
                    <h1 className='font-bold text-md mb-2'>Car Body Type</h1>
                    <ul className='mb-6'>
                        {uniqueCategoryBody.map(uniqueCateg => (
                            <li key={uniqueCateg.id} className='flex gap-x-2 pb-2'>
                                <input type="checkBox" onChange={(e) => addToSelectedCategoryDispatch(e, uniqueCateg.body)} />
                                <span>{uniqueCateg.body}</span>
                            </li>
                        ))}

                    </ul>
                </div>

                {/* for fuel type category */}
                <div>
                    <h1 className='font-bold text-md mb-2'>Car Fuel Type</h1>
                    <ul className='mb-6'>
                        {uniqueFuelType.map(uniqueCateg => (
                            <li key={uniqueCateg.id} className='flex gap-x-2 pb-2'>
                                <input type="checkBox" onChange={(e) => addToSelectedCategoryDispatch(e, uniqueCateg.fuelType)} />
                                <span>{uniqueCateg.fuelType}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* for seat category */}
                <div>
                    <h1 className='font-bold text-md mb-2'>Car Seats</h1>
                    <ul className='mb-6'>
                        {uniqueSeat.map(uniqueCateg => (
                            <li key={uniqueCateg.id} className='flex gap-x-2 pb-2'>
                                <input type="checkBox" onChange={(e) => addToSelectedCategoryDispatch(e, uniqueCateg.seat)} />
                                <span>{uniqueCateg.seat}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* for transmission category */}
                <div>
                    <h1 className='font-bold text-md mb-2'>Car Transmission</h1>
                    <ul className='mb-6'>
                        {uniqueTransmission.map(uniqueCateg => (
                            <li key={uniqueCateg.id} className='flex gap-x-2 pb-2'>
                                <input type="checkBox" onChange={(e) => addToSelectedCategoryDispatch(e, uniqueCateg.transmission)} />
                                <span>{uniqueCateg.transmission}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}