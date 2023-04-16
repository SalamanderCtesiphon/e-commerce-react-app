import React from 'react'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { BsDash, BsPlus, BsXLg } from 'react-icons/bs'

function ProductList(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  console.log(cart.items)

  return (
    <li className='card'>
      <div className='left-box'>
        <h3>{product.title}</h3>
        <p>Price: {product.price}</p>
      </div>
      {productQuantity > 0 ?
      <>
      <div className='quant-display'>
      <form > 
        <BsDash className='quant-btn' onClick={() => cart.removeOneFromCart(product.id)} />
        <label>In Cart: {productQuantity}</label>
        <BsPlus className='quant-btn' onClick={() => cart.addOneToCart(product.id)} />
      </form>
      </div>
      <BsXLg className='delete-button' onClick={() => cart.deleteFromCart(product.id)} />
      </>
      :
      <div className='select-btn' onClick={() => cart.addOneToCart(product.id)}>Add to Cart</div>
      }
    </li>
  )
}

export default ProductList