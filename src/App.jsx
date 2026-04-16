import React, { use, useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'ABC',
      rating: 7.8,
    },
    {
      id: 2,
      title: 'ABC',
      rating: 7.8,
    },
    {
      id: 3,
      title: 'ABC',
      rating: 7.8,
    }]);
  
  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 2 ? {...m, title: "EFG"} : m))
    );
  }

  return (
    <section>
      {
        movies.map(m => (
          <li key={Math.random()}>Id: {m.id}, title: {m.title}</li>
        ))
      }

      <button onClick={handleClick}>Change Movie Name of 2</button>
    </section>
    
  );
}

export default App;