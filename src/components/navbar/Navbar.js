import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">
      <NavLink
                exact
                to="/Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
      </li>
      <li className="items">
      <NavLink
                exact
                to="/buattodo"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My To Do
              </NavLink>
      </li>
    </ul>
      )}

      
    </nav>
  )
}