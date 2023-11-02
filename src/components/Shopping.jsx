import { Link } from 'react-router-dom'

function Shopping() {
  return (
    <>
      <h1 className='text-center text-4xl font-bold my-4 text-gray-800'>
        Shopping
      </h1>
      <div className='flex justify-center items-center space-x-4'>
        <h2 className='text-2xl font-bold'>Categories:</h2>
        <ul className='flex justify-center items-center space-x-4'>
          <Link to='./fiction'>
            <li className='text-xl font-bold'>Fiction</li>
          </Link>
          <Link to='./non-fiction'>
            <li className='text-xl font-bold'>Non Fiction</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Shopping
