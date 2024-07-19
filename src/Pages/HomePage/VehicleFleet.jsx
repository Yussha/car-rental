import SectionTitle from "../../Components/SectionTitle"
import SectionSubtitle from "../../Components/SectionSubtitle"

export default function VehicleFleet() {
    return (
        <section className={`h-auto mt-20 pb-24 h-auto pl-3 pr-3 xl:pl-20 xl:pr-20 lg:mt-40`}>
            <div className="flex flex-col items-center gap-y-2">
                <SectionSubtitle>Enjoy Your Ride</SectionSubtitle>
                <SectionTitle>Our Vehicle Fleet</SectionTitle>

                <p className={`text-center mt-4 sm:w-9/12 lg:w-6/12 `} style={{ color: '#676767' }}>
                    Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.
                </p>
            </div>
        </section>
    )
}