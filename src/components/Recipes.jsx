import { Link } from 'react-router-dom'

function Recipe() {
  const recipes = [
    'Chicken Tandoori',
    'Chicken Tikka Masala',
    'Chicken Korma',
    'Sheekh Kabab',
    'Chicken Biryani',
  ]

  return (
    <div>
      {
        recipes.map((recipe, index) => (
          <Link to={`/recipes/${index}`} key={index}>
            <h1 className="text-3xl font-bold underline">{recipe}</h1>
          </Link>
        ))
      }
    </div>
  )
}

export default Recipe
