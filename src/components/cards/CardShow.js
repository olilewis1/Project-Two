import React from 'react'

const CardShow = ( { cards.name[0] }) => {
  return (
    <>
      <h1>play game</h1>
      {console.log('props', cards.name[0])}
      {/* {console.log('cards random', props[Math.floor(Math.random() * 10)])}  */}
      {/* <CardInfo key={card.name} {...card} /> */}
    </> 
  )
}

export default CardShow
