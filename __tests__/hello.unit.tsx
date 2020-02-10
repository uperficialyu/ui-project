import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../lib/Button';

test('hello', () => {
  const json = renderer.create(<Button />).toJSON();
  expect(json).toMatchSnapshot();
})