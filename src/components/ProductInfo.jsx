import React from 'react'

const ProductInfo = ({products}) => {

  return (
    <div>
      <main>
        {products.map(({id, name, price}) => (
          <ul key={id}>
            <li>Id: {id}</li>
            <li>Name: {name}</li>
            <li>Price: {price}</li>
          </ul>
        ))}
      </main>
    </div>
  )
}

export default ProductInfo