import React, { useContext } from 'react'
import { BiCart } from 'react-icons/bi'
import ProductList from './components/ProductList'
import { productsArray } from './Products'
import CartProvider, { CartContext } from './CartContext'

function Shop(props) {
  let product = props.product
  const cart = useContext(CartContext)
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
 
  return (
    <CartProvider>
      <div className="App">
      <div className='page-view'>
        <div className='header'>
          <h1>Shop Page!!!!!!!</h1>
          <div className='btn-box'>
            <a href="/">Home</ a>
            <a href="/About">About</a>
            <BiCart className='shopping-cart' />
            <div className='items-in-cart'>({productsCount})</div>
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
            <div className='checkout'></div>
          </div>
        </div>
      </div>
    </div>
    </CartProvider>
  )
}

export default Shop