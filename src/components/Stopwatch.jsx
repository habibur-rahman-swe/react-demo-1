import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  
  const startTimer = () => {
    if(isRunning) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000)
  }

  const stopTimer = () => {
    if (!isRunning) return;

    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  const resetTimer = () => {
    stopTimer();       // চলমান interval বন্ধ করো
    setTime(0);       // সময় শূন্য করো
    setIsRunning(false);
  };

   return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>স্টপওয়াচ</h1>
      <h2>{time} সেকেন্ড</h2>
      <button onClick={startTimer} disabled={isRunning}>স্টার্ট</button>
      <button onClick={stopTimer} disabled={!isRunning}>স্টপ</button>
      <button onClick={resetTimer}>রিসেট</button>
    </div>
  );
}

export default Stopwatch