import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <body>
      <div className = "home-container">
        <div className = 'instructions-div'>
          <p>Welcome to Star Trumps STARSHIPS edition. Choose a category on the card and try to beat your opponent. <br/>May the force be with you. </p>
        </div>
        <Link to="/cards/game"> 
          <div className="button_slide slide_right">START GAME </div>
          <br /> <br /><br />
        </Link> 
      </div>
    </body>
  )
}

export default Home