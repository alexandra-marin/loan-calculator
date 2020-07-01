import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const minAmount = 1000;
  const maxAmount = 5000;

  const minDuration = 6;
  const maxDuration = 36;

  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(6);

  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [nominalInterestRate, setNominalInterestRate] = useState('');

  const [error, setError] = useState(null);

  const handleAmountChange = (e) => { setAmount(e.target.value) };
  const handleDurationChange = (e) => { setDuration(e.target.value) };

  const fetchData = async () => {
    try {
      console.log('>>> Requesting new estimate');
      const response = await fetch("https://api.koyoloans.com/interest?amount=1000&numMonths=6");
      const { monthlyPayment, nominalInterestRate } = await response.json();
      setMonthlyPayment(`${monthlyPayment.amount} ${monthlyPayment.currency}`);
      setNominalInterestRate(`${nominalInterestRate}%`);
    } catch (error) {
      setError(error);
    }
  };

  const debounceOnChange = React.useCallback(debounce(fetchData, 400), []);

  useEffect(() => {
    debounceOnChange();
  }, [amount, duration, debounceOnChange]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Loan Calculator
        </p>
      </header>
      <div>
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="range" min={minAmount} max={maxAmount} value={amount} onChange={handleAmountChange} />
        <p>{amount}</p>

        <label htmlFor="duration">Duration</label>
        <input id="duration" type="range" min={minDuration} max={maxDuration} value={duration} onChange={handleDurationChange} />
        <p>{duration}</p>

        <p>Your interest rate will be: {nominalInterestRate}</p>
        <p>Your monthly payment will be: {monthlyPayment}</p>

        <p>{error}</p>
      </div>
    </div>
  );
};

export default App;
