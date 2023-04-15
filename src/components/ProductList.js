import React from 'react'

function ProductList({ inventory, selectItem}) {
  return (
    <div>
       {inventory.map((item) => {
                return (
                  <li key={item.id} className='card'>
                    <div className='left-box'>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                    </div>
                    
                    <div className='select-btn' onClick={() => selectItem(item.id)}>Select Item</div>
                  </li>
                )
              })}
    </div>
  )
}

export default ProductList