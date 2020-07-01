import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { minAmount, maxAmount, minDuration, maxDuration } from './utils/constants';
import logo from './logo.svg';
import './App.css';
import { requestEstimate } from './api/estimate';

const App = () => {
  const [amount, setAmount] = useState(minAmount);
  const [duration, setDuration] = useState(minDuration);

  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [nominalInterestRate, setNominalInterestRate] = useState('');

  const [error, setError] = useState(null);

  const handleAmountChange = (e) => { setAmount(e.target.value) };
  const handleDurationChange = (e) => { setDuration(e.target.value) };

  const getEstimate = async (amount, duration) => {
    const { success, result } = await requestEstimate(amount, duration);
    if (success) {
      const { monthlyPayment, nominalInterestRate } = result;

      setMonthlyPayment(`${monthlyPayment.amount} ${monthlyPayment.currency}`);
      setNominalInterestRate(`${nominalInterestRate}%`);
    } else {
      setError(result);
    };
  };

  const debounceOnChange = React.useCallback(debounce((amount, duration) => getEstimate(amount, duration), 400), []);

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
