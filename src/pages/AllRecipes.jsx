import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllRecipes = ({ loading, setLoading, hover, setHover }) => {
  const [recipes, setRecipes] = useState([]);

  async function allRecipes() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    setRecipes(data.meals);
  }

  function filterRecipes(filter) {
    if (filter === "ethnicity") {
      setRecipes(
        recipes.slice().sort((a, b) => a.strArea.localeCompare(b.strArea))
      );
    }
  }

  useEffect(() => {
    allRecipes();
    setLoading(false);
  }, []);

  return (
    <section id="allRecipes">
      <div className="container">
        <div className="row">
          <div className="page__text--wrapper">
            <h1 className="page__title">Search Our Recipes</h1>
            <p className="page__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse
              illo libero ad eos quas enim voluptatibus nesciunt eveniet, fugit
              odit ipsam laboriosam cumque corrupti itaque. Sapiente reiciendis
              ratione magnam.
            </p>
          </div>
          <div className="container recipe__container">
            <div className="filter">
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterRecipes(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="ethnicity">Sort By Ethnicity</option>
                <option value="type">Sort By Type</option>
              </select>
            </div>
            <div className="container recipe__container">
              <div className="recipe__wrapper">
                {loading
                  ? new Array(10)
                      .fill("")
                      .map((recipe) => (
                        <div className="recipe__card backside"></div>
                      ))
                  : recipes.map((recipe, i) => (
                      <>
                        <div
                          className={
                            hover === i
                              ? `recipe__card recipe__hover`
                              : `recipe__card`
                          }
                          onMouseEnter={() => {
                            setHover(i);
                          }}
                          onMouseLeave={() => setHover(-1)}
                        >
                          <Link to={`recipes/${recipe.idMeal}`}>
                            <img
                              src={recipe.strMealThumb}
                              alt=""
                              className="meal__img"
                            />
                          </Link>
                          <h3 className="meal__title">
                            {recipe.strMeal.length > 20
                              ? recipe.strMeal.substring(0, 20) + "..."
                              : recipe.strMeal}
                          </h3>
                          <p>{recipe.strArea}</p>
                        </div>
                      </>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllRecipes;
