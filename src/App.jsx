import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'

import Recipe from './components/Recipe.jsx'
import Recipes from './components/Recipes.jsx'

import SignUp from './components/SignUp.jsx'

import LogIn from './components/LogIn.jsx'
import Dashboard from './components/Dashboard.jsx'

import Shopping from './components/Shopping.jsx'
import Fiction from './components/Fiction.jsx'
import NonFiction from './components/NonFiction.jsx'
import Product from './components/Product.jsx'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/service" element={<h1>Service</h1>} />

        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<Recipe />} />

        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/welcome" element={<h1>Welcome</h1>} />

        <Route path="/log-in" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:user" element={<Dashboard />} />

        <Route path="shopping">
          <Route index element={<Shopping />} />
          <Route path="fiction">
            <Route index element={<Fiction />} />
            <Route path=":productId" element={<Product product={'fiction'} />} />
          </Route>
          <Route path="non-fiction">
            <Route index element={<NonFiction />} />
            <Route path=":productId" element={<Product product={'non-fiction'} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
