/*eslint-disable camelcase */
import React from 'react'

const Card = ( { name, length, passengers, max_atmosphering_speed, cost_in_credits }) => {
  return (
    <>
      {console.log('NAME', name )}
      <div className="card-wrapper">
        <div className="card-header">
          <div>{name}</div>
          <div className="logo"></div>
        </div>
        <div className="img"></div>
        <div className="info">
          <p>Cost in Credits <span>{cost_in_credits}</span></p>
          <p>Length <span>{length}</span></p>
          <p>Speed <span>{max_atmosphering_speed}</span></p>
          <p>Passengers <span>{passengers}</span></p>
          
        </div>

      </div>
    </>
  )
}

export default Card
