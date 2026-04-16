import React from 'react'

const Weather = ({temparature}) => {
  if (temparature < 15) {
    return <h1>It's cold outside!</h1>
  } else if (temparature >= 15 && temparature <= 25) {
    return <h1>It's nice outside!</h1>
  } else {
    return <h1>It's hot outside!</h1>
  }
}

export default Weather