import React, { useEffect, useRef, useState } from 'react'

const PreviousValueTracker = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h2>Current count: {count}</h2>
      <h3>Previous count: {prevCount ?? 'First time'}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default PreviousValueTracker