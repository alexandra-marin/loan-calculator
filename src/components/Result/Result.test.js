import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

test('Slider requests new estimate when is moved', () => {
    const element = shallow(<Result nominalInterestRate={2} monthlyPayment={10} />);
    const text = element.text();

    expect(text).toContain('Your interest rate will be: 2');
    expect(text).toContain('Your monthly payment will be: 10');
});
