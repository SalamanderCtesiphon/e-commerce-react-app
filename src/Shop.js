import React, { useEffect } from 'react'
import { useState } from 'react'
import { BiCart } from 'react-icons/bi'
import { BsXLg, BsDash, BsPlus } from 'react-icons/bs'
import ProductList from './components/ProductList'

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
    showCheckout()
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

  function changeQuantity(id) {
    shoppingCart.map((shoppingItems) => {
      if(shoppingItems.id === id) {
       console.log('hi')
      }
    })
    console.log(shoppingCart)
  }

  function showCheckout() {
    const checkOut = document.querySelector('.checkout')
    checkOut.style.visibility = 'visible'
  }

  function hideCheckout() {
    const checkOut = document.querySelector('.checkout')
    checkOut.style.visibility = 'hidden'
  }

  function renderCheckOut() {
    return (
      shoppingCart.map((shoppingItems) => {
        return(
        <li key={shoppingItems.id} className='check-out-card'>
          <p>Product: {shoppingItems.title}</p>
          <div>Quantity:</div>
          <div className='quantity-display'>
          <BsDash className='quant-btn'/><input
            className='quant-display'
            defaultValue={shoppingItems.quantity} 
            />
             <BsPlus className='quant-btn' onClick={() => changeQuantity()}/>
          </div>
          <div>Subtotal: {shoppingItems.quantity * shoppingItems.price}</div>
         
        </li>
        )
      })
    )
  }


  function totalCost() {
    let results = 0
    let temp = 0
    shoppingCart.map((shoppingItems) => {
      results = 0
      results = shoppingItems.quantity * shoppingItems.price
      temp += results
    })
    return temp
  }

  useEffect(() => {
    renderCheckOut()
    totalCost()
  })

  const shoppingCartDisplay = shoppingCart.length

  return (
    <div className="App">
      <div className='page-view'>
        <div className='header'>
          <h1>Shop Page!!!!!!!</h1>
          <div className='btn-box'>
            <a href="/">Home</ a>
            <a href="/About">About</a>
            <BiCart className='shopping-cart'onClick={() => showCheckout()}/>
            {shoppingCart.length > 0 ? <div className='items-in-cart'>{shoppingCartDisplay}</div> : null}
          </div>
        </div>
        <div>
          <div className='card-display'>
            <ul className='card-list'>
             <ProductList 
             inventory={inventory}
             selectItem={selectItem}
             />
            </ul>
          </div>
          <div className='checkout'>
            <BsXLg className='exit' onClick={() => hideCheckout()}/>
            <ul>
             {renderCheckOut()}
            </ul>
            <div className='subtotal'>this will be the subtotal{totalCost()}</div>
            <div className='check-out-btn'onClick={() => hideCheckout()}>Check Out</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop