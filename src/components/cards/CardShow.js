/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const CardShow = ( ) => {

  const [cards, setCards] = useState(null)
  const [cardFaceUp, setCardFaceUp] = useState('')
  const [cardFaceDown, setCardFaceDown] = useState('')

  const [eventNumber, setEventNumber] = useState('')

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
    setEventNumber(event.target.value)
    if (eventNumber === undefined) {
      return null && console.log('you lost')
    }

    // * WIN / LOSE / DRAW LOGIC

    // * PASSENGERS
    
    if (eventNumber.split('').indexOf(',') !== -1 || eventNumber.split('').indexOf('/') !== -1 ){
      console.log('contains a comma or a n/a')
      if (eventNumber.split('').indexOf(',') !== -1) { 
        return setEventNumber(eventNumber.replace(/,/g, '')), console.log('newevent, no comma', typeof eventShow)
      } else { 
        console.log('im n/a')
      }
    } else if (eventNumber.split('').indexOf(',') === -1) {
      console.log('all good doesnt contain comma')
    }
    if (eventNumber === 'n/a') {
      console.log('replace n/a', eventNumber.replace(/(n\/a)+/g, '0'))
    }
    if (cardFaceDown.passengers === 'n/a') {
      console.log('replace n/a card down ', cardFaceDown.passengers.replace(/(n\/a)+/g, '0'))
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

  // * MGLT

  if (parseInt(eventNumber) > parseInt(cardFaceDown.MGLT)) {
    console.log( 'type of', typeof eventNumber)
    console.log('you won')
  }
  if (parseInt(eventNumber) < parseInt(cardFaceDown.MGLT)) {
    console.log('you lost')
    console.log( 'type of', typeof eventNumber)
  }
  if (parseInt(eventNumber) === parseInt(cardFaceDown.MGLT)) {
    console.log('draw')
    console.log( 'type of', typeof eventNumber)
  }

  // * COST IN CREDITS

  if (eventNumber > cardFaceDown.cost_in_credits || cardFaceDown.cost_in_credits === 'unknown') { 
    console.log('you win cost in credits')
  } 
  if (eventNumber < cardFaceDown.cost_in_credits || eventNumber === 'unknown') {
    console.log('you won')
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
            <button className="card-button" value={cardFaceUp.MGLT} > Megalights per hour - <span className="Data">{cardFaceUp.MGLT} </span></button>
            <button className="card-button" value={cardFaceUp.cost_in_credits} > Cost - <span className="Data">{cardFaceUp.cost_in_credits} </span></button>

            <button className="card-button"> Length - <span className="Data">{cardFaceUp.length} </span></button>
            <button className="card-button"> Hyperdrive Rating- <span className="Data">{cardFaceUp.hyperdrive_rating} </span></button>

          </div>
          <div className="card-single-container">
            <p>Name - {cardFaceDown.name} </p>
            <p>Passengers - {cardFaceDown.passengers} </p>
            <p>Megalights Per hour - {cardFaceDown.MGLT} </p>

            <p>Cost - {cardFaceDown.cost_in_credits}</p>
            <p>Length - {cardFaceDown.length} </p>
            <p>Hyperdrive rating - {cardFaceDown.hyperdrive_rating} </p>
          </div>
        </div> 
      </div>
    </> 
  )
}

export default CardShow
