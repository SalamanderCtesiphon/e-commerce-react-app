import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './About'
import Shop from './Shop'

function RouteSwitch() {
  return (
    <BrowserRouter basename="/e-commerce-react-app">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch