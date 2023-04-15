import React, { useEffect } from 'react'
import { useState } from 'react'
import { BiCart } from 'react-icons/bi'

function Shop() {
  const [inventory] = useState([
    {
      id: 1,
      quantity: 1,
      title: 'M4800',
      price: 100.00,
      selected: false,
    },
    {
      id: 2,
      quantity: 1,
      title: 'M5000',
      price: 200.00,
      selected: false,
    },
    {
      id: 3,
      quantity: 1,
      title: 'M6200',
      price: 300.00,
      selected: false,
    },
  ])

  const [shoppingCart, setShoppingCart] = useState([])

  

  function selectItem(id) { 
    let sameProduct = shoppingCart.filter((shoppingItems) => {
      return shoppingItems.id === id
    })
    if(sameProduct.length === 1) {
      shoppingCart.map((shoppingItems) => {
        if(shoppingItems.id === id) {
          shoppingItems.quantity = shoppingItems.quantity + 1
          sameProduct = []
        }
        return shoppingCart
      })
    } else {
      inventory.map((item) => {
        if(item.id === id) {
          setShoppingCart(shoppingItems => {
            return [
              ...shoppingItems,
              {
                id, quantity: item.quantity, title: item.title, price: item.price, selected: true
              },
            ]          
          })
        }
        return shoppingCart
      }) 
    }
    console.log(shoppingCart)
    return shoppingCart 
  }

  useEffect(() => {
  }, [shoppingCart.quantity])

  const shoppingCartDisplay = shoppingCart.length

  return (
    <div className="App">
      <div className='page-view'>
        <div className='header'>
          <h1>Shop Page!!!!!!!</h1>
          <div className='btn-box'>
            <a href="/">Home</ a>
            <a href="/About">About</a>
            <BiCart className='shopping-cart'onClick={() => console.log('hi')}/>
            {shoppingCart.length > 0 ? <div className='items-in-cart'>{shoppingCartDisplay}</div> : null}
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
          <div className='checkout'>
            <ul>
             {shoppingCart.map((shoppingItems) => {
                return(
                <li key={shoppingItems.id} className='check-out-card'>
                  {shoppingItems.title}
                  {shoppingItems.quantity}
                </li>
                )
              })}
            </ul>
            <div className='subtotal'>this will be the subtotal</div>
            <div className='check-out-btn'>Check Out</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop