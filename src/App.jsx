import Weather from './components/Weather';
import UserStatus from './components/UserStatus'
import React from 'react'
import Greeting from './components/Greeting';

const App = () => {
  
  return (
    <div>
      <h1>Conditional Rendering in Reach</h1>

      <Weather
       temparature={10}
       />
      <Weather
       temparature={20}
       />
       <Weather
       temparature={30}
       />
      <br />
      
      <UserStatus 
        isAdmin={true}
        loggedIn={true} 
        />

      <br />

      <Greeting
        timeOfDay={"morning"}
      />
    </div>
  );
}

export default App;