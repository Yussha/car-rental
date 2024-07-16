//styles
import './App.css';

// Router packages
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";

// Pages
import Home from './Pages/HomePage/Home'
import Cars from './Pages/CarsPage/Cars'
import Contact from './Pages/ContactPage/Contact';


function App() {

  return (
    <main className="app">
      <Navbar />
      <Routes>
        <Route path='/car-rental' element={<Home />} />
        <Route path='cars' element={<Cars />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
