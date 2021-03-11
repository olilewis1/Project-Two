import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardInfo from './CardInfo'



const CardIndex = () => {

  const [cards, setCards] = useState(null)
  console.log(cards)
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/')
      console.log('DATA', response)
      setCards(response.data)
    }
    getData()
  }, [])


  return (
    <div>
      { cards.map( card => ( 
        <CardInfo key={card.name} {...cards}/> 
      ) )}
      
    </div>
  )
}

export default CardIndex
