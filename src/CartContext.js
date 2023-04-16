import React from 'react'
import { createContext, useState } from 'react'
import { productsArray } from './Products'

const cartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})