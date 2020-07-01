import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Slider from './Slider';

test('Slider displays received values', () => {
  const element = shallow(<Slider label={'TestLabel'} value={42} />);
  const text = element.text();

  expect(text).toContain('TestLabel');
  expect(text).toContain('42');
});

test('Slider requests new estimate when is moved', () => {
  const spy = sinon.spy();
  const RangeInput = (on_change) => <Slider onChange={on_change} />;

  const tested_range_input = shallow(RangeInput(spy));
  tested_range_input.find('input').simulate('change');
  expect(spy.callCount).toBe(1);
});
