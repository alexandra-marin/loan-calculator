import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { minAmount, maxAmount, minDuration, maxDuration } from './utils/constants';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [amount, setAmount] = useState(minAmount);
  const [duration, setDuration] = useState(minDuration);

  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [nominalInterestRate, setNominalInterestRate] = useState('');

  const [error, setError] = useState(null);

  const handleAmountChange = (e) => { setAmount(e.target.value) };
  const handleDurationChange = (e) => { setDuration(e.target.value) };

  const fetchData = async (amount, duration) => {
    try {
      console.log('>>> Requesting new estimate', amount, duration);
      const response = await fetch(`https://api.koyoloans.com/interest?amount=${amount}&numMonths=${duration}`);
      const { monthlyPayment, nominalInterestRate } = await response.json();
      setMonthlyPayment(`${monthlyPayment.amount} ${monthlyPayment.currency}`);
      setNominalInterestRate(`${nominalInterestRate}%`);
    } catch (error) {
      setError(error);
    }
  };

  const debounceOnChange = React.useCallback(debounce((amount, duration) => fetchData(amount, duration), 400), []);

  useEffect(() => {
    debounceOnChange(amount, duration);
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
