// CSS
import styles from './home.module.css';

// Bg
import heroBg from '../../assets/HeroBG.jpg'

export default function Hero() {
    return (
        <section className={`${styles.customHero} pr-4 pl-4 pt-24 pb-24`}>

            <div >
                <div className={`${styles.heroText}`}>
                    <h2 className={`font-bold text-lg mb-4`}>Plan your trip now</h2>
                    <h1 className={`font-bold text-5xl leading-tight mb-6`}>Explore the world with comfortable car</h1>
                    <p className={`leading-7 w-72 mb-4`}>Embark on unforgettable adventures and discover the world in unparalleled comfort and style with our fleet of exceptionally comfortable cars.</p>
                </div>

                <div className={``}>
                    <button className={`${styles.chooseBtn} block mb-4 p-1 pl-4 pr-4`}>Choose a Car</button>
                    <button className={`${styles.getAppBtn} mb-10 p-1 pl-4 pr-4`}>Get the App</button>
                </div>
            </div>

            <div className='relative bg-blue-900'>
                <img className='absolute z-30 w-72 left-8' src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car-2.png" alt="" />

                <img className={`${styles.fancyBorderHero} absolute top-10 z-10 w-60 right-0`} src={heroBg} alt="" />
            </div>

        </section>
    )
}