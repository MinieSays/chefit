import React from 'react'
import {logo} from "../assets/"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className="nav__wrapper">
        <div className="row nav__container">
          <Link to={"/"}>
            <img src={logo} alt="" className="img__logo" />
          </Link>
            <ul className="nav__links">
                    <Link to={"/"}>
                    <li className="nav__link">Home</li>
                    </Link>
                    <Link to={"/allrecipes"}>
                    <li className="nav__link">All Recipes</li>
                    </Link>
                    <Link to={"/contact"}>
                    <li className="nav__link">Contact</li>
                    </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Nav