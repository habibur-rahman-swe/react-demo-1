import React, { use, useState } from 'react'
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)}/>
    </section>
    
  );
}

export default App;