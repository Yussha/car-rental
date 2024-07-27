//styles
import './App.css';

// Router packages
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import ScrollToTopOnNavigate from './Components/ScrollToTopOnNavigate ';
import LoginForm from './Components/LoginForm';
import Overlay from './Components/Overlay';

// Pages
import Home from './Pages/HomePage/Home'
import Cars from './Pages/CarsPage/Cars'
import Contact from './Pages/ContactPage/Contact';
import Rental from './Pages/RentalPage/Rental';

import { useState, useEffect } from 'react';

function App() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  return (
    <ScrollToTopOnNavigate>
      <main className="app">
        {isLoginFormOpen && <Overlay />}
        <Navbar setIsLoginFormOpen={setIsLoginFormOpen} />
        <Routes>
          <Route path='/car-rental' element={<Home />} />
          <Route path='cars' element={<Cars />} />
          <Route path='contact' element={<Contact setIsLoginFormOpen={setIsLoginFormOpen} />} />
          <Route path='/rental' element={<Rental setIsLoginFormOpen={setIsLoginFormOpen} />} />
        </Routes>
        <LoginForm setIsLoginFormOpen={setIsLoginFormOpen} isLoginFormOpen={isLoginFormOpen} />
        <Footer />
      </main>
    </ScrollToTopOnNavigate>

  )
}

export default App
