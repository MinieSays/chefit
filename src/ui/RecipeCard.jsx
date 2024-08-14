import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const RecipeCard = ( {recipes, loading, searchRecipe, hover, setHover} ) => {
    
  return (
    <>

    <div className="container recipe__container">
    <div className="recipe__wrapper">
        { loading ? 
        new Array(10).fill("").map((recipe) => (
                <div className="recipe__card backside">
                </div>
            )) 
            : (recipes === null) ? `Sorry there are no recipes with "${searchRecipe}"` : 
            recipes.map((recipe, i) => (
                <>
                <div className={hover === i ? `recipe__card recipe__hover` : `recipe__card`} onMouseEnter={() => {
                    setHover(i)}
                    }
            
                    onMouseLeave={() => setHover(-1)}>
                    <Link to={`recipes/${recipe.idMeal}`}>
                    <img src={recipe.strMealThumb} alt="" className="meal__img" />
                    </Link>
                    <h3 className="meal__title">
                        {
                        recipe.strMeal.length > 20 ? (recipe.strMeal.substring(0, 20) + "...") : recipe.strMeal
                        }
                    </h3>
                    <p>{recipe.strArea}</p>
                    </div>
                </>

            ))
        }
  </div>
  </div>
  </>
  )
}

export default RecipeCard