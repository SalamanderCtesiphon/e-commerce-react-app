import React from 'react'
import { BiCart } from 'react-icons/bi'
import { BsXLg/* , BsDash, BsPlus */ } from 'react-icons/bs'
import ProductList from './components/ProductList'
import { productsArray } from './Products'
import CartProvider from './CartContext'

function Shop() {
 
  return (
    <CartProvider>
      <div className="App">
      <div className='page-view'>
        <div className='header'>
          <h1>Shop Page!!!!!!!</h1>
          <div className='btn-box'>
            <a href="/">Home</ a>
            <a href="/About">About</a>
            <BiCart className='shopping-cart'/>
          </div>
        </div>
        <div>
          <div className='card-display'>
            <ul className='card-list'>
             {productsArray.map((product, id) => {
              return (
                <ProductList 
                product={product}
                key={product.id}
                />
              )
             })}
            </ul>
          </div>
          <div className='checkout'>
            <BsXLg className='exit' />
            <ul>
            </ul>
            <div className='subtotal'>this will be the subtotal:</div>
            <div className='check-out-btn'>Check Out</div>
          </div>
        </div>
      </div>
    </div>
    </CartProvider>
  )
}

export default Shop