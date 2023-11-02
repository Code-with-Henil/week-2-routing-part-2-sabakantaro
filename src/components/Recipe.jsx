import { useParams } from "react-router-dom"

function Recipe() {
  const recipes = [
    'Chicken Tandoori',
    'Chicken Tikka Masala',
    'Chicken Korma',
    'Sheekh Kabab',
    'Chicken Biryani',
  ]

  const details = [
    'Chicken Tandoori is a dish originating from the Indian subcontinent. It is widely popular in South Asia, Malaysia, Singapore, Indonesia, the Middle East and the Western world. It consists of roasted chicken prepared with yogurt and spices. The name comes from the type of cylindrical clay oven, a tandoor, in which the dish is traditionally prepared.',
    'Chicken tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are multiple claims to its place of origin, including the Punjab region of the Indian subcontinent or Glasgow in Scotland.',
    'Korma (from Turkish kavurma), also spelled kormaa, qorma, khorma, kurma, or qovurma, is a dish originating in the Indian subcontinent, consisting of meat or vegetables braised with yogurt (dahi) or cream, water or stock, and spices to produce a thick sauce or glaze.',
    'A seekh kebab, kebab or shish kebab is a type of kebab, popular in South Asia, made with spiced minced or ground meat, usually lamb, beef, or chicken, formed into cylinders on skewers and grilled. It is typically cooked on a mangal or barbecue, or in a tandoor.',
    'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat (chicken, beef, goat, pork, lamb, prawn, or fish), and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties.',
  ]

  const { recipeId } = useParams()
  const recipeName = recipes[recipeId]
  const recipeDetail = details[recipeId]

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{recipeName}</h1>
      <p>{recipeDetail}</p>
    </div>
  )
}

export default Recipe
