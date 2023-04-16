import React from 'react'
import Footer from './components/Footer'

function About() {
  return (
    <div className="App"> 
      <div className='page-view'>
        <div className='header'>
          <h1>About Page!!!!!!!</h1>
          <div className='btn-box'>
            <a href="/">Home</ a>
            <a href="/About">About</a>
            <a href='/Shop'>Shop</a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About