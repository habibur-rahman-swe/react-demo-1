import React from 'react'

const Greeting = ({timeOfDay}) => {
  const morning = "morning";
  const afternoon = "afternoot";

  if (timeOfDay == morning) {
    return <h1>Good Morning!</h1>
  } else if (timeOfDay == afternoon) {
    return <h1>Good Afternoot!</h1>
  } else {
    return <h1>Good night!</h1>
  }
}

export default Greeting