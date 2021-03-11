import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className = "home-container">
        <div className = 'instructions-div'>
          <p>Instructions</p>
        </div>
        <Link to="/cards/game"> 
          <button>Start Game </button> 
        </Link> 
      </div>
    </>
  )
}

export default Home