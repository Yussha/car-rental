//styles
import './App.css';

// Router packages
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

// Pages
import Home from './Pages/HomePage/Home'
import Cars from './Pages/CarsPage/Cars'
import Contact from './Pages/ContactPage/Contact';
import Rental from './Pages/RentalPage/Rental';


function App() {
  return (
    <main className="app">
      <Navbar />
      <Routes>
        <Route path='/car-rental' element={<Home />} />
        <Route path='cars' element={<Cars />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/rental' element={<Rental />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
