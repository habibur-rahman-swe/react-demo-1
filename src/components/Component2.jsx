import React, { useContext } from 'react'
import UserContext from './UserContext'

const Component2 = () => {
  const {userName} = useContext(UserContext)

  return (
    <div style={{border: '1px solid blue', margin: '10px', padding: '10px'}}>
      <h3>Component 2</h3>
      <p>Welcome {userName}</p>
    </div>
  )
}

export default Component2