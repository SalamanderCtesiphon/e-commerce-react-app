import React from 'react'
import { BiCart } from 'react-icons/bi'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
import CheckOut from './CheckOut'

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
            <a href='/Shop'>Shop</a>
            <BiCart className='shopping-cart' onClick={() => console.log(cart)}/>
            {productsCount > 0 ? 
            <div className='items-in-cart'>{productsCount}</div> : null
            }
          </div>
        </div>
        <div className='checkout'>
        {productsCount > 0 ? 
          <div>
            <p>Items in your cart:</p>
            {cart.items.map((currentProduct, idx) => (
              <CheckOut key={currentProduct.id} id={currentProduct.id} quantity={currentProduct.quantity}></CheckOut>
            ))}
            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
            <div className='check-out-btn'>Check Out</div>
          </div>
          :
              <h3>There are no items in your cart</h3>

        }
        </div>
    </div>
  )
}

export default Header