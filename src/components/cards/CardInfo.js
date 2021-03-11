import React from 'react'

const Card = (props) => {
  return (
    <>
      {console.log('NAME', props[Math.floor(Math.random() * 10)].name  )}
      <div className="card-wrapper">
        <div className="card-header">
          <div>{name}</div>
          <div className="logo"></div>
        </div>
        <div className="img"></div>
        <div className="info">
          <p>Speed <span>Data</span></p>
        </div>

      </div>
    </>
  )
}

export default Card
