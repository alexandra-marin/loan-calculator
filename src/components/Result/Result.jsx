import React from 'react';
import './Result.css';

const Result = React.memo(({ nominalInterestRate, monthlyPayment, error, isLoading }) => {
  if (isLoading) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }
  else {
    return (
      <div className="container">
        <p>Your interest rate will be: <b>{nominalInterestRate}</b></p>
        <p>Your monthly payment will be: <b>{monthlyPayment}</b></p>
        <p>{error}</p>
      </div>
    );
  }
});

export default Result;
