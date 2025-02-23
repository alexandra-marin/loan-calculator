import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { minAmount, maxAmount, minDuration, maxDuration } from './utils/constants';
import { requestEstimate } from './api/estimate';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider/Slider';
import Result from './components/Result/Result';

const App = React.memo(() => {
  const [amount, setAmount] = useState(minAmount);
  const [duration, setDuration] = useState(minDuration);

  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [nominalInterestRate, setNominalInterestRate] = useState('');

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleAmountChange = useCallback((e) => { setAmount(e.target.value) }, []);
  const handleDurationChange = useCallback((e) => { setDuration(e.target.value) }, []);

  const getEstimate = async (amount, duration) => {
    setIsLoading(true);
    const { success, result } = await requestEstimate(amount, duration);
    if (success) {
      const { monthlyPayment, nominalInterestRate } = result;

      setMonthlyPayment(`${monthlyPayment.amount} ${monthlyPayment.currency}`);
      setNominalInterestRate(`${nominalInterestRate}%`);
    } else {
      setError(result);
    };
    setIsLoading(false);
  };

  const debounceOnChange = useCallback(debounce((amount, duration) => getEstimate(amount, duration), 400), []);

  useEffect(() => {
    debounceOnChange(amount, duration);
  }, [amount, duration, debounceOnChange]);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="Koyo Loans" />
        <p>Loan Calculator</p>
      </header>
      <div className="page-body">
        <div className="calculator">
          <Slider id="amount" label="Amount" min={minAmount} max={maxAmount} value={amount} onChange={handleAmountChange} />
          <Slider id="duration" label="Duration" min={minDuration} max={maxDuration} value={duration} onChange={handleDurationChange} />
          <Result isLoading={isLoading} nominalInterestRate={nominalInterestRate} monthlyPayment={monthlyPayment} error={error} />
        </div>
      </div>
    </div>
  );
});

export default App;
