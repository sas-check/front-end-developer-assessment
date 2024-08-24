import React from 'react';
import './App.css';
import Greeting from './component/Greeting';

function App() {
  return (
    <div className="App">
      <h1>Exemple de salutation</h1>

      <Greeting name="John" />
      <Greeting name="Marie" />
      <Greeting name="Alexandre" />
    </div>
  );
}

export default App;
