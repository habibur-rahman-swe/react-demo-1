import React, { useRef } from 'react'

const SimpleFocus = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.value = '';
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Focus me' />
      <button onClick={handleClick}>Focus and clear</button>
    </div>
  )
}

export default SimpleFocus