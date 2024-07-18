//Parts
import Hero from "./Hero"

import styles from './home.module.css';

export default function Home() {
    return (
        <div className={`${styles.customHome} pt-28 pb-24 h-auto pl-3 pr-3 lg:pt-44 xl:pl-20 xl:pr-20 `}>
            <Hero />
        </div>
    )
}