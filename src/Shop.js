import React from 'react'

function Shop() {
  return (
    <div className="App">
      <div className='page-view'>
        <div className='header'>
          <h1>Shop Page!!!!!!!</h1>
          <div className='btn-box'>
            <form action="/">
                <button type="submit">Home</button>
            </form>
            <form action="/About">
                <button type="submit">About</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Shop