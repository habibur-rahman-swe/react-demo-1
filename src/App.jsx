import React, { useState } from 'react'

const App = () => {
  const [friends, setFriend] = useState(["A", "B", "C"]);

  const addOneFriend = () => setFriend([...friends, "D"]);
  const removeFriend = () => setFriend(friends.filter((f) => f !== "D"));
  const updateOneFriend = () => setFriend(friends.map(f => f === "D" ? "DX" : f))
  
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {friends.map((friend) => (
          <li key={Math.random()}>{friend}</li>
        ))}
      </ul>

      <button onClick={addOneFriend}>Add new Friend</button>
      <button onClick={removeFriend}>Remove new Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>
    </div>
    
  );
}

export default App;