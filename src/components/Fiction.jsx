import { Link } from "react-router-dom"

function Fiction() {
  const products = [
    'The Alchemist',
    'The Monk Who Sold His Ferrari',
    'The Power of Your Subconscious Mind'
  ]
  return (
    <>
      <h1 className='text-center text-4xl font-bold my-4 text-gray-800'>
        Fiction
      </h1>
      <div className='flex justify-center items-center space-x-4'>
        <ul className='flex justify-center items-center space-x-4'>
          {products.map((product, index) => (
            <Link to={`./${product}`} key={index}>
              <li key={index} className='text-xl font-bold'>{product}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Fiction
