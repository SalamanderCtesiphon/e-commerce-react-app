import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from './reaources/Products'
import { BsXLg } from 'react-icons/bs'


function CheckOut(props) {
  const cart = useContext(CartContext)
  const id  = props.id
  const quantity = props.quantity
  const productData = getProductData(id)

  return (
    <div>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>$ {(quantity * productData.price).toFixed(2)}</p>
      <BsXLg className='delete-button' onClick={() => cart.deleteFromCart(id)}/>
      <hr></hr>
    </div>
    
  )
}

export default CheckOut