import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const { productId } = useParams()
  return (
    <div className='text-center text-4xl font-bold my-4 text-gray-800'>
      <h1 className='text-center text-4xl font-bold my-4 text-gray-800'>
        Product
      </h1>
      <h2 className='text-2xl font-bold'>{productId}</h2>
    </div>
  )
}

export default Product
