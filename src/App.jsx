import UserContext from "./components/UserContext";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("alex")
  return (
    <div>
      <UserContext.Provider value = {{userName, setUserName}}>
        <div style={{padding: '20px'}}>
          <h1>আমার অ্যাপ - মূল কম্পোনেন্ট</h1>
          <Component1/>
          <Component2/>
          <Component3/>
          <Component4/>
          <Component5/>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;