import React from 'react'

const Greeting = () => {
  const greetingMessage = 'Hello every body';
  const name = "John";
  const date = new Date();

  return (
    <div>
      <h1>{greetingMessage} : {name}</h1>
      <p> Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
    </div>
  )
}

export default Greeting