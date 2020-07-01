import React from 'react';

const Result = ({ nominalInterestRate, monthlyPayment, error }) => {
  return (
    <div>
      <p>Your interest rate will be: {nominalInterestRate}</p>
      <p>Your monthly payment will be: {monthlyPayment}</p>
      <p>{error}</p>
    </div>
  );
};

export default Result;
