import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h2>Person name : {props.name}</h2>
      <p>Person Age: {props.age}</p>
    </div>
  )
}

export default Person