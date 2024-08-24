import React from 'react';
import './App.css';
import Greeting from '../../test_react/src/component/Greeting';
import Counter from '../../test_react/src/component/Counter';
import Name from '../../test_react/src/component/Name';

function App() {
  return (
    <div className="App">
      <h1>Test React </h1>

      <h3>Tache 1</h3>
      <Greeting name="John" />
      <Greeting name="Marie" />
      
      
      <h3>Tache 2</h3>
      <Counter />


      <h3>Tache 3</h3>
      <Name />


    </div>
  );
}

export default App;
