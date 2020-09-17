import React from 'react';
import { render, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from 'components/App';
import Header from '../components/Heading/Header';

describe('Profile test-suite', () => {
  test('profile renders', () => {
    //render(<Header />);
    const wrapper = <Header></Header>;
    expect(wrapper).toMatchSnapshot();
    //expect(screen.getByText('')).toBeInTheDocument();
  });
});
