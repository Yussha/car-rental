//styles
import './App.css';

// Router packages
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import SocMedNavbar from "./Components/SocMedNavbar"

// Pages
import Home from './Pages/HomePage/Home'
import Cars from './Pages/CarsPage/Cars'
import Contact from './Pages/ContactPage/Contact';

//hooks
import { useEffect } from 'react';

// redux toolkit
import { useSelector, useDispatch } from 'react-redux'
import { trackWidth } from './ReduxStore/trackScreenWidthSlice';

function App() {
  const screenWidth = useSelector(state => state.trackScreenWidth.screenWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const trackChanges = () => {
      dispatch(trackWidth())
    }
    window.addEventListener('resize', trackChanges)

    //clean up function
    return () => {
      window.removeEventListener('resize', trackChanges)
    }
  }, [screenWidth])

  return (
    <main className="app">
      {screenWidth >= 361 && <SocMedNavbar />}
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
