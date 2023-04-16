import React from 'react'
import { BiCart } from 'react-icons/bi'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

function Header() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <div>
       <div className='header'>
          <h1>Shop Page!!!!!!!</h1>
          <div className='btn-box'>
            <a href="/">Home</ a>
            <a href="/About">About</a>
            <BiCart className='shopping-cart' onClick={() => console.log(cart)}/>
            <div className='items-in-cart'>{productsCount}</div>
          </div>
        </div>
    </div>
  )
}

export default Header