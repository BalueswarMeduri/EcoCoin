import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Button from './components/Button/Button';
import GreenGuide from './Page/GreenGuide/GreenGuide';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Addimage" element={<Button />} />
            <Route path="/GreenGuide" element={<GreenGuide />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App