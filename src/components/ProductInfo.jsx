import React from 'react'

const ProductInfo = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$669"
    },
    {
      id: 2,
      name: "Phone",
      price: "$669"
    },
    {
      id: 3,
      name: "Phone",
      price: "$669"
    },
    {
      id: 4,
      name: "Phone",
      price: "$669"
    },
  ]

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