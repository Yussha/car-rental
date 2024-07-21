//Parts
import Hero from "./Hero"
import Services from "./Services";
import About from "./About";
import VehicleFleet from "./VehicleFleet";
import Testimonial from "./Testimonial";
import QuestionLists from "./QuestionLists";
import LogoSlider from "./LogoSlider";
import ContactInfo from "./ContactInfo";


export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <VehicleFleet />
            <Testimonial />
            <QuestionLists />
            <LogoSlider />
            <ContactInfo />
        </>

    )
}