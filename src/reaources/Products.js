const productsArray = [
  {
    id: 1,
    quantity: 1,
    title: 'M4800',
    price: 100.00,
  },
  {
    id: 2,
    quantity: 1,
    title: 'M5000',
    price: 200.00,
  },
  {
    id: 3,
    quantity: 1,
    title: 'M6200',
    price: 300.00,
  },
]

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id)
  if(productData === undefined) {
    console.log('data does not exist for id')
    return undefined
  }
  return productData
}

export { productsArray, getProductData }