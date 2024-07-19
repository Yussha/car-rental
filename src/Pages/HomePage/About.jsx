import styles from './home.module.css';

export default function About() {
    return (
        <section className={`${styles.customAbout} relative -z-10 pl-3 pr-3 pt-20 pb-20 `}>
            <div className={`${styles.overlay} absolute top-0 left-0 bottom-0 right-0 -z-10`}></div>
            <div className='p-3 sm:pl-10 sm:pr-10 lg:grid lg:grid-cols-2 lg:gap-x-8'>
                <h1 className='text-4xl font-bold sm:pr-10 lg:pr-0'>We offer customers a wide range of <span style={{ color: '#fd7e14' }}>commercial cars</span> and <span style={{ color: '#fd7e14' }}>luxury cars</span> for any occasion</h1>

                <p className='text-justify mt-10 lg:mt-0'>
                    At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.
                </p>
            </div>

            <div className='p-3 flex flex-col gap-y-4 mt-10 sm:pl-10 sm:pr-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 md:grid-cols-4'>

                <div className={`${styles.customCountInfoDetails} flex flex-col items-center justify-center gap-y-2 p-8 rounded-md`}>
                    <span style={{ color: '#fd7e14' }} className='font-bold text-3xl'>15425</span>
                    <h2 className='md:text-center'>Completed Orders</h2>
                </div>

                <div className={`${styles.customCountInfoDetails} flex flex-col items-center justify-center gap-y-2 p-8 rounded-md`}>
                    <span style={{ color: '#fd7e14' }} className='font-bold text-3xl'>8745</span>
                    <h2 className='md:text-center'>Happy Customers</h2>
                </div>

                <div className={`${styles.customCountInfoDetails} flex flex-col items-center justify-center gap-y-2 p-8 rounded-md`}>
                    <span style={{ color: '#fd7e14' }} className='font-bold text-3xl'>235</span>
                    <h2 className='md:text-center'>Vehicles Fleet</h2>
                </div>

                <div className={`${styles.customCountInfoDetails} flex flex-col items-center justify-center gap-y-2 p-8 rounded-md`}>
                    <span style={{ color: '#fd7e14' }} className='font-bold text-3xl'>15</span>
                    <h2 className='md:text-center'>Years Experience</h2>
                </div>

            </div>
        </section>
    )
}