import React from 'react';
import { render, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../components/App';
import Header from '../components/Heading/Header';

describe('Header test-suite', () => {
  test('profile renders', () => {
    expect(<App />).toMatchSnapshot();
    expect(<Header />).toMatchSnapshot();
  });
});
