/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

import starships from '../../images/starships/starships.jpg'


const CardShow = ( ) => {

  const [cards, setCards] = useState(null)
  const [cardFaceUp, setCardFaceUp] = useState('')
  const [cardFaceDown, setCardFaceDown] = useState('')

  const [hasClickedEvent, setHasClickedEvent] = useState(false)

  // const [playerChoice, setPlayerChoice] = useState(null)
  // console.log(playerChoice)
  // const [eventNumber, setEventNumber] = useState('')
  // console.log(eventNumber)
  const [result, setResult] = useState('')

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

  useEffect(() => { 
    setResult(false)
    
  }, [])
  


  // * HANDLE PLAY AGAIN

  const handlePlayAgain = event => {
    event.preventDefault()
    console.log('event', event)
    setCardFaceDown(cards[Math.floor(Math.random() * 10)])
    setCardFaceUp(cards[Math.floor(Math.random() * 10)])
    setHasClickedEvent(false)
    setResult('')
  }


  // * HANDLE SUBMIT
  const handleSubmit = event => {

    event.preventDefault()
    console.log('eventtargetname', event.target)
    console.log('CARD FACEDOWN', cardFaceDown)
    console.log('CARDFACEUP',cardFaceUp[event.target.name])
    // setPlayerChoice(event.target.name)
    // setEventNumber(event.target.value)

    let cardFaceUpName = cardFaceUp[event.target.name]
    let cardFaceDownName = cardFaceDown[event.target.name]
    
    cardFaceUpName = cardFaceUpName.replace(/,/g, '')
    console.log(cardFaceUpName) 
    cardFaceDownName = cardFaceDownName.replace(/,/g, '')
    console.log(cardFaceDownName) 

    if (cardFaceUpName === 'n/a' || cardFaceUpName === 'unknown' ) {
      cardFaceUpName = 0
      console.log('CFUN 0', cardFaceUpName)
    }
    if (cardFaceDownName === 'n/a' || cardFaceDownName === 'unknown') {
      cardFaceDownName = 0
      console.log('CFDN 0', cardFaceDownName)
    }

    cardFaceUpName = parseInt(cardFaceUpName)
    console.log('CFUN NUM', typeof cardFaceUpName)
    cardFaceDownName = parseInt(cardFaceDownName)
    console.log('CFDN NUM', typeof cardFaceDownName)

    if (cardFaceUpName < cardFaceDownName) {
      console.log('you lose')
      setResult('lose')
    }
    if (cardFaceUpName > cardFaceDownName) {
      console.log('you win')
      setResult('win')
    }
    if (cardFaceUpName === cardFaceDownName) {
      console.log('you draw')
      setResult('draw')
    }

    console.log('event', event)
    setHasClickedEvent(true)
    console.log('handleclickevent', hasClickedEvent)

    console.log('cardFaceUp.length', cardFaceUp.length)
  }
  
  // const handleClick = event => {
  //   console.log('event', event)
  //   setHasClickedEvent(true)
  //   console.log('handleclickevent', hasClickedEvent)
  // }
  
  if (!cards) return null 

  return (
    <>
      <div className="card-container">
        <div className="card-single-container">
          <div className="card-header">
            <div className="logo"></div>
            <p className="name-of-starship">{cardFaceUp.name} </p>
          </div>
          <div className="image"><img src={starships}/>
          </div> 
          <div className="information">
            <button className="card-button" name="passengers" onClick={handleSubmit}  value={cardFaceUp.passengers} > Passengers - <span className="data">{cardFaceUp.passengers} </span></button>
            <button className="card-button" name="MGLT" onClick={handleSubmit}  value={cardFaceUp.MGLT} > Megalights per hour - <span className="data">{cardFaceUp.MGLT} </span></button>
            <button className="card-button" name="cost_in_credits" onClick={handleSubmit}  value={cardFaceUp.cost_in_credits} > Cost - <span className="data">{cardFaceUp.cost_in_credits} </span></button>
            <button className="card-button" name="length" onClick={handleSubmit} value={cardFaceUp.length}> Length - <span className="data">{cardFaceUp.length} </span></button>
            <button className="card-button" name="hyperdrive_rating" onClick={handleSubmit} value={cardFaceUp.hyperdrive_rating}> Hyperdrive Rating - <span className="data">{cardFaceUp.hyperdrive_rating} </span></button>
          </div>
        </div>
        <div className={!hasClickedEvent ? 'card-single-container back card display-nothing' : 'card-single-container front card'}> 
          <div className="card-header">
            <div className="logo"></div>
            <p className="name-of-starship">{cardFaceDown.name} </p>
          </div>
          <div className="image"><img src={starships}/></div>
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
        <span className="result">{result}</span>
        { hasClickedEvent &&
        <button onClick={handlePlayAgain} className ="play-again-button">Play Again</button>}
      </div></> 
  )
}

export default CardShow
