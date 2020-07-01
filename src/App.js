import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const minAmount = 1000;
  const maxAmount = 5000;


  const minDuration = 6;
  const maxDuration = 36;

  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(6);

  const handleAmountChange = (e) => { setAmount(e.target.value) };
  const handleDurationChange = (e) => { setDuration(e.target.value) };

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
        <input id="amount" type="range" min={minAmount} max={maxAmount} value={amount} onChange={handleAmountChange} />
        <p>{amount}</p>

        <label for="duration">Duration</label>
        <input id="duration" type="range" min={minDuration} max={maxDuration} value={duration} onChange={handleDurationChange} />
        <p>{duration}</p>

        <p>Your interest rate will be:</p>
        <p>Your monthly payment will be:</p>
      </div>
    </div>
  );
};

export default App;
