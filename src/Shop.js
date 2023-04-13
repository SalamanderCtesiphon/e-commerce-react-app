import React, { useEffect } from 'react'
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
  const [shoppingCart, setShoppingCart] = useState([])
  const [id, setId] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [title, setTitle] = useState(null)
  const [price, setPrice] = useState(null)
  

  function selectItem(id) { 
    inventory.map((item) => {
      if(item.id === id) {
        setShoppingCart(shoppingItems => {
          return [
            ...shoppingItems,
            {
              id, quantity: item.quantity, title: item.title, price: item.price
            },
          ]
        })
      }
    })
    
  }

  useEffect(() => {
    console.log(shoppingCart)
  }, [shoppingCart])

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
          <div className='card-display'>
            <ul className='card-list'>
              {inventory.map((item) => {
                return (
                  <li key={item.id} className='card'>
                    <div className='left-box'>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                    </div>
                    
                    <button onClick={() => selectItem(item.id)}>Select Item</button>
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