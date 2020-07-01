import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const handleAmountChange = () => { };
  const handleDurationChange = () => { };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Loan Calculator
        </p>
      </header>
      <div>
        <label for="amount">Amount</label>
        <input id="amount" type="range" min="1" max="100" value="50" onChange={handleAmountChange} />

        <label for="duration">Duration</label>
        <input id="duration" type="range" min="1" max="100" value="50" onChange={handleDurationChange} />
      </div>
    </div>
  );
};

export default App;
