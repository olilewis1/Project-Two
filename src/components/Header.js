import React from 'react'
import { Link } from 'react-router-dom'
import h2 from '../images/header/h2.png'

const Header = () => {

  
  return (
    <div className="header-wrapper">
      <Link to="/">
        <img className="title" src={h2} alt="header"/>
      </Link>
    </div>
  )
}

export default Header
