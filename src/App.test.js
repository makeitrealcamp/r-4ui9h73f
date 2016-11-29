import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders the text field', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it('renders the paragraph', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('p.repeater').length).toBe(1);
});

it('repeats the text', () => {
  const wrapper = shallow(<App />);
  wrapper.find('input[type="text"]').simulate('change', { target: { value: 'My new value' } });
  expect(wrapper.find('p.repeater').text()).toBe("My new value");
});
