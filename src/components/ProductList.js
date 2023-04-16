import React from 'react'
import { CartContext } from '../CartContext'
import { useContext } from 'react'

function ProductList(props) {
  const product = props.product
 /*  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id) */

  return (
    <li className='card'>
      <div className='left-box'>
        <h3>{product.title}</h3>
        <p>Price: {product.price}</p>
      </div>
      <div className='select-btn'>Select Item</div>
    </li>
  )
}

export default ProductList