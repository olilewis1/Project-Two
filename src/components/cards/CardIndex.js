import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardInfo from './CardInfo'
import CardShow from './CardShow'

const CardIndex = () => {

  const [cards, setCards] = useState(null)
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/')
      console.log('DATA', response.data.results)
      setCards(response.data.results)
      console.log('set cards', setCards)
    }
    getData()
  }, [])

  if (!cards) return null 
  return (
    <>
      <CardShow {...cards} /> 
      {console.log('cards', cards)} 
      <div className="cards-mapped">
        { cards.map( card => ( 
          <>
            <CardInfo key={card.name} {...card} />
            {/* <CardShow {...card} /> */}
          </>
        ) )}

      
      </div>
    </>
  )
}

export default CardIndex
