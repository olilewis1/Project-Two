/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const CardShow = ( ) => {

  const [cards, setCards] = useState(null)
  const [cardFaceUp, setCardFaceUp] = useState('')
  const [cardFaceDown, setCardFaceDown] = useState('')

  const [eventShow, setEventShow] = useState('')

  console.log(eventShow, setEventShow)
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/')
      console.log('DATA', response.data.results)
      setCards(response.data.results)
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
    console.log('EVENT', (event.target.value))
    const eventNumber = event.target.value
    if (eventNumber === undefined) {
      return null && console.log('you lost')
    }

    // * WIN / LOSE / DRAW LOGIC

    // * PASSENGERS
    
    if (eventNumber.split('').indexOf(',') !== -1 || eventNumber.split('').indexOf('/') !== -1 ){
      console.log('contains a comma or a n/a')
      if (eventNumber.split('').indexOf(',') !== -1) { 
        return setEventShow(eventNumber.replace(/,/g, '')), console.log('newevent, no comma', typeof eventShow)
      } else { 
        console.log('im n/a')
      }
    } else if (eventNumber.split('').indexOf(',') === -1) {
      console.log('all good doesnt contain comma')
    }
    if (eventNumber === 'n/a') {
      console.log('replace n/a', eventNumber.replace(/(n\/a)+/g, '0'))
    }
  
    if (parseInt(eventNumber) > parseInt(cardFaceDown.passengers)) {
      console.log('you won')
    }
    if (parseInt(eventNumber) < parseInt(cardFaceDown.passengers)) {
      console.log('you lost')
    }
    if (parseInt(eventNumber) === parseInt(cardFaceDown.passengers)) {
      console.log('draw')
    }
    console.log('type of', typeof eventNumber)
  }


  
  if (!cards) return null 

  return (
    <>
      <div> 
        <h1>play game</h1>
        <div className="card-container">
          <div onClick={handleSubmit} className="card-single-container">
            <button className="card-button"> Name - <span className="Data">{cardFaceUp.name} </span></button>
            <button className="card-button" value={cardFaceUp.passengers} > Passengers - <span className="Data">{cardFaceUp.passengers} </span></button>
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
