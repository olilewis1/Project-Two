/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const CardShow = ( ) => {

  const [cards, setCards] = useState(null)
  const [cardFaceUp, setCardFaceUp] = useState('')
  const [cardFaceDown, setCardFaceDown] = useState('')

  const [eventNumber, setEventNumber] = useState('')
  // const [result, setResult] = useState('')
  // console.log(result, setResult)

  // const win = 'win'
  // * GET DATA

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/')
      setCards(response.data.results)
    }
    getData()
  }, [])


  useEffect(() => { 
    if (!cards) return null
    setCardFaceUp(cards[Math.floor(Math.random() * 10)])

  }, [cards])

  useEffect(() => {
    if (!cards) return null
    setCardFaceDown(cards[Math.floor(Math.random() * 10)])
  }, [cards])

  

  // * HANDLE PLAY AGAIN
  
  const handlePlayAgain = event => {
    event.preventDefault()
    console.log('event', event)
    setCardFaceDown(cards[Math.floor(Math.random() * 10)])
    setCardFaceUp(cards[Math.floor(Math.random() * 10)])
  }


  // * HANDLE SUBMIT

  const handleSubmit = event => {
    event.preventDefault()
    console.log('EVENT', (event.target.value))
    console.log('card face down', cardFaceDown.[event.target.name])
    setEventNumber(parseInt(event.target.value)), console.log( typeof eventNumber)
    //Sort out numbers

    if (eventNumber === undefined) return null
    
    // if (eventNumber.split('').indexOf(',') !== -1) { 
    //   return setEventNumber(eventNumber.replace(/,/g, '')), console.log(eventNumber) 
    // } setEventNumber(Number(event.target.value))
    if (event.target.value > cardFaceDown.[event.target.name]) { 
      console.log('you win')
    } 
    
    

    // * WIN / LOSE / DRAW LOGIC

    // * PASSENGERS
    
    // if (eventNumber.split('').indexOf(',') !== -1 || eventNumber.split('').indexOf('/') !== -1 ){
    //   console.log('contains a comma or a n/a')
    //   if (eventNumber.split('').indexOf(',') !== -1) { 
    //     return setEventNumber(eventNumber.replace(/,/g, '')), console.log('newevent, no comma', typeof eventShow)
    //   } else { 
    //     console.log('im n/a')
    //   }
    // } else if (eventNumber.split('').indexOf(',') === -1) {
    //   console.log('all good doesnt contain comma')
    // }

    // if (eventNumber === 'n/a') {
    //   console.log('replace n/a', eventNumber.replace(/(n\/a)+/g, '0'))
    // }
    // if (cardFaceDown.passengers === 'n/a') {
    //   console.log('replace n/a card down ', cardFaceDown.passengers.replace(/(n\/a)+/g, '0'))
    // }
  
    // if (parseInt(eventNumber) > parseInt(cardFaceDown.passengers)) {
    //   console.log('you won')
    //   setResult(win)
    // }
    // if (parseInt(eventNumber) < parseInt(cardFaceDown.passengers)) {
    //   console.log('you lost')
    // }
    // if (parseInt(eventNumber) === parseInt(cardFaceDown.passengers)) {
    //   console.log('draw')
    // }
    // console.log('type of', typeof eventNumber)
  }

  // * MGLT

  // if (parseInt(eventNumber) > parseInt(cardFaceDown.MGLT)) {
  //   console.log( 'type of', typeof eventNumber)
  //   console.log('you won')
  // }
  // if (parseInt(eventNumber) < parseInt(cardFaceDown.MGLT)) {
  //   console.log('you lost')
  //   console.log( 'type of', typeof eventNumber)
  // }
  // if (parseInt(eventNumber) === parseInt(cardFaceDown.MGLT)) {
  //   console.log('draw')
  //   console.log( 'type of', typeof eventNumber)
  // }

  // * COST IN CREDITS

  // if (eventNumber > cardFaceDown.cost_in_credits || cardFaceDown.cost_in_credits === 'unknown') { 
  //   console.log('you win cost in credits')
  // } 
  // if (eventNumber < cardFaceDown.cost_in_credits || eventNumber === 'unknown') {
  //   console.log('you won')
  // } 

  // * LENGTH

  // if (eventNumber.split('').indexOf(',') !== -1 ){
  //   console.log('contains a comma')
  //   return setEventNumber(eventNumber.replace(/,/g, '')), console.log('newevent, no comma', typeof eventShow)
  // } else {
  //   console.log('doesnt contain a comma')
  // }

  // if (parseInt(eventNumber) > parseInt(cardFaceDown.length)) {
  //   console.log( 'type of', typeof eventNumber)
  //   console.log('you won')
  // }
  // if (parseInt(eventNumber) < parseInt(cardFaceDown.length)) {
  //   console.log('you lost')
  //   console.log( 'type of', typeof eventNumber)
  // }

  // * HYPERDRIVE RATING

  // if (parseInt(eventNumber) > parseInt(cardFaceDown.hyperdrive_rating)) {
  //   console.log( 'type of hyperdrive', typeof eventNumber)
  //   console.log('you won hyperdrive')
  // }
  // if (parseInt(eventNumber) < parseInt(cardFaceDown.hyperdrive_rating)) {
  //   console.log('you lost hyperdrive')
  //   console.log( 'type of hyperdrive', typeof eventNumber)
  // }
  // if (parseInt(eventNumber) === parseInt(cardFaceDown.hyperdrive_rating)) {
  //   console.log('draw hyperdrive')
  //   console.log( 'type of hyperdrive', typeof eventNumber)
  // }

  
  if (!cards) return null 

  return (
    <>
      <div className="card-container">
        <div className="card-single-container">
          <div className="card-header">
            <p>{cardFaceUp.name} </p>
          </div>
          <div className="image"></div>
          <div className="information">
            <button className="card-button" name="passengers" onClick={handleSubmit}  value={cardFaceUp.passengers} > Passengers - <span className="Data">{cardFaceUp.passengers} </span></button>
            <button className="card-button" name="MGLT" onClick={handleSubmit}  value={cardFaceUp.MGLT} > Megalights per hour - <span className="Data">{cardFaceUp.MGLT} </span></button>
            <button className="card-button" name="cost_in_credits" onClick={handleSubmit}  value={cardFaceUp.cost_in_credits} > Cost - <span className="Data">{cardFaceUp.cost_in_credits} </span></button>
            <button className="card-button" name="length" onClick={handleSubmit} value={cardFaceUp.length}> Length - <span className="Data">{cardFaceUp.length} </span></button>
            <button className="card-button" name="hyperdrive_rating" onClick={handleSubmit} value={cardFaceUp.hyperdrive_rating}> Hyperdrive Rating - <span className="Data">{cardFaceUp.hyperdrive_rating} </span></button>
          </div>
        </div>
        <div className={!eventNumber ? 'card-single-container back card' : 'card-single-container front card'}>  
          <div className="card-header">
            <p>Name - {cardFaceDown.name} </p>
          </div>
          <div className="image"></div>
          <div className="information">
            <p>Passengers - {cardFaceDown.passengers} </p>
            <p>Megalights Per hour - {cardFaceDown.MGLT} </p>
            <p>Cost - {cardFaceDown.cost_in_credits}</p>
            <p>Length - {cardFaceDown.length} </p>
            <p>Hyperdrive rating - {cardFaceDown.hyperdrive_rating} </p>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <span className="result">result</span>
        { eventNumber &&
        <button onClick={handlePlayAgain} className ="play-again-button">Play Again</button>}
      </div></> 
  )
}

export default CardShow
