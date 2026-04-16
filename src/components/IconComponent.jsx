import React from 'react'
import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  const style = {
    fontSize: "30px",
    color: "gold"
  };

  return (
    <div>
      <h1>Bear: </h1>
      <FaBeer size={30} />
      <FaBeer size={30} color='gold'/>
    </div>
  )
}

export default IconComponent