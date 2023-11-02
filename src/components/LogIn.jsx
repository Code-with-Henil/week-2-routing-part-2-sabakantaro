import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogIn() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    const email = document.querySelector('input[name="email"]').value
    navigate(`/dashboard/${email}`)
  }

  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Log In</h1>
      <form className="flex flex-col justify-center items-center space-y-3">
        <label className='flex flex-col justify-center items-center space-y-1'>
          Email:
          <input type="text" name="email" className='border-2 border-gray-400 rounded-md' />
        </label>
        <label className='flex flex-col justify-center items-center space-y-1'>
          Password:
          <input type="text" name="password" className='border-2 border-gray-400 rounded-md' />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default LogIn
