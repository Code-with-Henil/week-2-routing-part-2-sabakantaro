import { Link } from 'react-router-dom'

function NonFictioon() {
  const products = [
    'The Murder of Roger Ackroyd',
    'Back to the future',
    'Go to the past'
  ]
  return (
    <>
      <h1 className='text-center text-4xl font-bold my-4 text-gray-800'>
        Non Fiction
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

export default NonFictioon
