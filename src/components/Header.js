import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/">
        <img className="title" src="./images/header/h2.png" alt="header"/>
      </Link>
    </div>
  )
}

export default Header
