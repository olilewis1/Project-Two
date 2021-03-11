
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