import React, { useEffect } from 'react'

const BassicEffect = () => {
  useEffect(() => {
    console.log("first time rendered")
  }, []);
  
  return (
    <div>
      <h1>Render for 2nd time!</h1>
    </div>
  )
}

export default BassicEffect