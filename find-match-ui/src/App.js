import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputName, saveInputName] = useState(null);
    return (
      <div className="App">
        <h1>Find My Soulmate :</h1>
        <div className="input-container">
          <input type="text" placeholder="Enter your Name" value={inputName} onChange={(e) => saveInputName(e.target.value)}/>
          <button className="girl-btn">Find a Girl</button>
          <button className="boy-btn">Find a Boy</button>
        </div>
      </div>
    );
}

export default App;
