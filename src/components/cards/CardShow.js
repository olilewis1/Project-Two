/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const CardShow = ( ) => {

  const [cards, setCards] = useState(null)
  const [cardFaceUp, setCardFaceUp] = useState('')
  const [cardFaceDown, setCardFaceDown] = useState('')

  console.log('cards', cards)
  console.log(cardFaceUp, setCardFaceUp)
  console.log('cardfacedown', cardFaceDown)
  console.log('setcardfacedown', setCardFaceDown)

  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/')
      console.log('DATA', response.data.results)
      setCards(response.data.results)
      console.log('set cards', setCards)
    }
    getData()
  }, [])


  useEffect(() => { 
    if (!cards) return null
    setCardFaceUp(cards[Math.floor(Math.random() * 10)])
    console.log('card face up random', cardFaceUp)
  }, [cards])

  useEffect(() => {
    if (!cards) return null
    setCardFaceDown(cards[Math.floor(Math.random() * 10)])
    console.log('card face up random', cardFaceDown)
  }, [cards])

  const handleSubmit = event => {
    event.preventDefault()
    console.log('EVENT', event)
  }

  if (!cards) return null 

  return (
    <>
      <div> 
        <h1>play game</h1>
        <div className="card-container">
          <div onClick={handleSubmit} className="card-single-container">
            <button className="card-button"> Name - <span className="Data">{cardFaceUp.name} </span></button>
            <button className="card-button"> Passengers - <span className="Data">{cardFaceUp.passengers} </span></button>
            <button className="card-button"> Speed - <span className="Data">{cardFaceUp.max_atmosphering_speed} </span></button>
            <button className="card-button"> Cost - <span className="Data">{cardFaceUp.cost_in_credits} </span></button>
            <button className="card-button"> Length - <span className="Data">{cardFaceUp.length} </span></button>

          </div>
          <div className="card-single-container">
            <p>Name - {cardFaceDown.name} </p>
            <p>Passengers - {cardFaceDown.passengers} </p>
            <p>Speed - {cardFaceDown.max_atmosphering_speed}</p>
            <p>Cost - {cardFaceDown.cost_in_credits}</p>
            <p>Length - {cardFaceDown.length} </p>
          </div>
        </div> 
      </div>
    </> 
  )
}

export default CardShow
