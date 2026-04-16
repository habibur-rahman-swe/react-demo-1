import React, { use, useState } from 'react'

const App = () => {
  const [movie, setMovie] = useState(
    {
      title: 'ABC',
      ratting: 7.8,
    });
  
  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratting: 5
    // }

    setMovie({...movie, ratting: 5});
  }

  return (
    <div>
      <h1>Title : {movie.title}</h1>
      <h2>Ratting : {movie.ratting}</h2>

      <button onClick={handleClick}>Change Movie Rattings</button>
    </div>
    
  );
}

export default App;