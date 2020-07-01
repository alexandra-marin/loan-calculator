import React from 'react';
import './Result.css';

const Result = ({ nominalInterestRate, monthlyPayment, error }) => {
  return (
    <div className="container">
      <p>Your interest rate will be: <b>{nominalInterestRate}</b></p>
      <p>Your monthly payment will be: <b>{monthlyPayment}</b></p>
      <p>{error}</p>
    </div>
  );
};

export default Result;
