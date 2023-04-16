import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './About'
import Shop from './Shop'

function RouteSwitch() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch