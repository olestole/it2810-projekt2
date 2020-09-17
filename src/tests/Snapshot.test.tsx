import React from 'react';
import { render, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import * as renderer from 'react-test-renderer';
import Header from '../components/Heading/Header';
import AppContextProvider from '../components/AppContextProvider';

describe('Header component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Whole page', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<AppContextProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
