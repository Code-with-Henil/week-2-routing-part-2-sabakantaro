import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Home() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to="/" className="font-semibold text-xl">Home</Link>
      <nav className='space-x-3 text-xl font-semibold'>
        <Link to="/about">About</Link>
        <NavLink to="/products" activeClassName="active">Products</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/service" activeClassName="active">Service</NavLink>

        <Link to="/recipes">Recipes</Link>

        <Link to="/sign-up">Sign Up</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/shopping">Shopping</Link>
      </nav>
    </header>
  )
}

export default Home
