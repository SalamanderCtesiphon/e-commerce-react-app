import React from 'react'
import { createContext, useState } from 'react'
import { productsArray } from './Products'

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

export function CartProvider({children}) {
  const [cartProducts, setCartProduct] = useState([])

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if(quantity === undefined) {
      return 0
    }
    return quantity
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id)

    if(quantity === 0) {
      setCartProduct(
        [
          ...cartProducts,
          {
            id: id,
            quantity: 1
          }
        ]
      )
    } else {
      setCartProduct(
        cartProducts.map(
          product => product.id === id ? { ...product, quantity: product.quantity + 1}
          :
          product
        )
      )
    }
  }

  const contextValue = {
    items: [],
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}