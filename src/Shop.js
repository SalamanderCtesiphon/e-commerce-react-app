import React from 'react'
import ProductList from './components/ProductList'
import Header from './components/Header'
import { productsArray } from './reaources/Products'
import CartProvider from './CartContext'


function Shop() {
  
 
  return (
    <CartProvider>
      <div className="App">
      <div className='page-view'>
       <Header />
        <div>
          <div className='card-display'>
            <ul className='card-list'>
             {productsArray.map((product) => {
              return (
                <ProductList 
                product={product}
                key={product.id}
                />
              )
             })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </CartProvider>
  )
}

export default Shop