import React from 'react'

function About() {
  return (
    <div className="App"> 
      <div className='page-view'>
        <div className='header'>
          <h1>About Page!!!!!!!</h1>
          <div className='btn-box'>
            <form action="/">
                <button type="submit">Home</button>
            </form>
            <form action="/shop">
                <button type="submit">Shop</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About