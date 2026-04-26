import React, { useReducer } from 'react'

// 1️⃣ reducer ফাংশন - এখানে কাজের লজিক লেখা হয়
// এটি বলে দেয়: "বর্তমান state আর action পেলে নতুন state কী হবে"
const lightReducer = (state, action) => {
  if (action === 'ON') {
    return 'ON';
  } else if (action === 'OFF') {
    return 'OFF';
  } else {
    return state;
  }
};

// 2️⃣ useReducer ব্যবহার করছি
// state = বর্তমান অবস্থা (ON না OFF)
// dispatch = নির্দেশ পাঠানোর ফাংশন
const LightSwitch = () => {
// 2️⃣ useReducer ব্যবহার করছি
// state = বর্তমান অবস্থা (ON না OFF)
// dispatch = নির্দেশ পাঠানোর ফাংশন
  const [state, dispatch] = useReducer(lightReducer, 'OFF');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>বর্তমান লাইট: {state === 'ON' ? '💡 জ্বলছে' : '🌑 নিভে আছে'}</h1>
      
      {/* 3️⃣ dispatch দিয়ে action পাঠানো হচ্ছে */}
      <button onClick={() => dispatch('ON')}>
        লাইট অন কর
      </button>
      
      <button onClick={() => dispatch('OFF')}>
        লাইট অফ কর
      </button>
    </div>
  )
}

export default LightSwitch