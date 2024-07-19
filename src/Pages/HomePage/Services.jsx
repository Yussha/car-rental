import SectionTitle from "../../Components/SectionTitle"
import SectionSubtitle from "../../Components/SectionSubtitle"

import { FaTrophy } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

export default function Services() {
    return (
        <section className={`h-auto mt-20 pb-24 h-auto pl-3 pr-3 xl:pl-20 xl:pr-20 lg:mt-40`}>
            <div className="flex flex-col items-center gap-y-2">
                <SectionSubtitle>Why Choose Us</SectionSubtitle>
                <SectionTitle>Our Features</SectionTitle>

                <p className={`text-center mt-4 sm:w-9/12 lg:w-6/12 `} style={{ color: '#676767' }}>
                    Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.
                </p>
            </div>

            <div className="mt-10 p-3 sm:pl-10 sm:pr-10 lg:grid lg:grid-cols-3 ">
                <div className="flex flex-col gap-y-4 lg:gap-y-12">
                    <div className={`flex gap-x-4 justify-center`}>
                        <span style={{ backgroundColor: '#fd7e14', color: '#fff' }} className={`h-fit rounded-md p-4 text-2xl`}><FaTrophy /></span>
                        <div>
                            <h1 style={{ color: "#201F1D" }} className="font-bold">Quality at Minimum Expense</h1>
                            <p style={{ color: '#676767' }} className="sm:pr-10">
                                Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.
                            </p>
                        </div>
                    </div>

                    <div className={`flex gap-x-4 justify-center`}>
                        <span style={{ backgroundColor: '#fd7e14', color: '#fff' }} className={`h-fit rounded-md p-4 text-2xl`}><FaRoad /></span>
                        <div>
                            <h1 style={{ color: "#201F1D" }} className="font-bold">24/7 road assistance</h1>
                            <p style={{ color: '#676767' }} className="sm:pr-10">
                                Reliable support when you need it most, keeping you on the move with confidence and peace of mind.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-4 place-self-center lg:w-full">
                    <img className="w-full max-w-full" src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car.png" alt="" />
                </div>

                <div className="flex flex-col gap-y-4 lg:gap-y-12">
                    <div className={`flex gap-x-4 justify-center flex-row-reverse`}>
                        <span style={{ backgroundColor: '#fd7e14', color: '#fff' }} className={`h-fit rounded-md p-4 text-2xl`}><FaTag /></span>
                        <div>
                            <h1 style={{ color: "#201F1D" }} className="font-bold text-right">Quality at Minimum Expense</h1>
                            <p style={{ color: '#676767' }} className="text-right sm:pl-10">
                                Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.
                            </p>
                        </div>
                    </div>

                    <div className={`flex gap-x-4 justify-center flex-row-reverse`}>
                        <span style={{ backgroundColor: '#fd7e14', color: '#fff' }} className={`h-fit rounded-md p-4 text-2xl`}><FaMapPin /></span>
                        <div>
                            <h1 style={{ color: "#201F1D" }} className="font-bold text-right">Free Pick-Up & Drop-Off</h1>
                            <p style={{ color: '#676767' }} className="text-right sm:pl-10">
                                Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}