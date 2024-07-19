//Parts
import Hero from "./Hero"
import Services from "./Services";
import About from "./About";
import VehicleFleet from "./VehicleFleet";

import styles from './home.module.css';

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <VehicleFleet />
        </>

    )
}