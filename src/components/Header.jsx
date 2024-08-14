import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import RecipeCard from '../ui/RecipeCard'


const Header = ( {loading, setLoading, hover, setHover} ) => {
const [recipes, setRecipes] = useState([])
const [searchRecipe, setSearchRecipe] = useState("")


async function getRecipes (searchRecipe) {
  setLoading(false)

  if (searchRecipe) {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`)
    setRecipes(data.meals)
  }

}


function handleSubmit(e) {
  e.preventDefault()
  getRecipes(searchRecipe)
}

  useEffect(() => {
  getRecipes()
console.log(recipes )
  }, [])



  return (
    <section id="header">
      <div className="container">

          <div className="search__container">
            <div className="title__desciption--container">
              <h1 className="title__search">
                Let's <span className="orange">Chef</span> It Up!
              </h1>
              <p className="search__para">
                Find your next meal by searching an ingredient in your fridge!
              </p>
            </div>
            <div className="search__inputs">
              <form onSubmit={handleSubmit}>
              <input type="text" className="input__field" value={searchRecipe} onChange={(e) => setSearchRecipe(e.target.value) }  />
              <button className="btn__search"><FontAwesomeIcon icon={faMagnifyingGlass} className="icon__search" onClick={() => handleSubmit}  /></button>
              </form>
            </div>
          </div>
              <RecipeCard recipes={recipes} loading={loading} setLoading={setLoading} hover={hover} setHover={setHover} />

      </div>
    </section>
  )
}

export default Header