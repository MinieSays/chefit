
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const RecipeInfo = () => {
const { id } = useParams()
const [recipe, setRecipe] = useState([])


async function getRecipeInfo() {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setRecipe(response.data.meals)
    console.log(recipe)
}

useEffect(() => {
getRecipeInfo()
}, [])

    
  return (
    <>
    <div className="container">
        <div className="row recipe__info--wrapper">
            {recipe.map((info) => (
            <div className="recipe__info--container">
            <div>
            <p className="recipe__info--category">
                {info.strCategory} & {info.strArea}
            </p>
            <figure className="img__wrapper">
                <img src={info.strMealThumb} className="recipe__info--img" alt="" />
            </figure>
            </div>
            <div className="recipe__description">
                <h1 className="recipe__title">
                        {info.strMeal}
                </h1>
                <h3 className="recipe__ingedients--title">Ingredients</h3>
                <ul className="recipe__ingrident--list">
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure1} {info.strIngredient1}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure2} {info.strIngredient2}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure3} {info.strIngredient3}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure4} {info.strIngredient4}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure5} {info.strIngredient5}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure6} {info.strIngredient6}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure7} {info.strIngredient7}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure8} {info.strIngredient8}
                    </li>
                    <li className="recipe__ingredient--list--item">
                    {info.strMeasure9} {info.strIngredient9}
                    </li>
                </ul>
                <p className="recipe__instructions">
                {info.strInstructions}
                </p>
            </div>
            </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default RecipeInfo