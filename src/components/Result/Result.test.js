import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

test('Result displays received values', () => {
    const element = shallow(<Result nominalInterestRate={2} monthlyPayment={10} />);
    const text = element.text();

    expect(text).toContain('Your interest rate will be: 2');
    expect(text).toContain('Your monthly payment will be: 10');
});

test('Result displays loading text if loading param is true', () => {
    const element = shallow(<Result isLoading={true} />);
    const text = element.text();

    expect(text).toContain('Loading...');
});

