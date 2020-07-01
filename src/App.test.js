import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders inputs and results', () => {
  const { getByText } = render(<App />);

  const amountElement = getByText(/Amount/i);
  expect(amountElement).toBeInTheDocument();

  const durationElement = getByText(/Duration/i);
  expect(durationElement).toBeInTheDocument();

  const interestElement = getByText(/interest rate/i);
  expect(interestElement).toBeInTheDocument();

  const paymentElement = getByText(/monthly payment/i);
  expect(paymentElement).toBeInTheDocument();
});
