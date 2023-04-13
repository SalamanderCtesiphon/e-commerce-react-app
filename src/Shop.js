import React from 'react'
import { useState } from 'react'

function Shop() {
  const [inventory] = useState([
    {
      id: 1,
      quantity: 1,
      title: 'M4800',
      price: 100.00,
    },
    {
      id: 2,
      quantity: 1,
      title: 'M5000',
      price: 200.00,
    },
    {
      id: 3,
      quantity: 1,
      title: 'M6200',
      price: 300.00,
    },
  ])

  function log() {
    console.log(inventory[0].price)
  }

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
        <div>
          <button onClick={() => log()}>click</button>
          <div>{inventory[0].price}</div>
          <div className='card-display'>
            <ul>
            {inventory.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                </li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Shop