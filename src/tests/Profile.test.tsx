import React from 'react';
import { render, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from 'components/App';

describe('Profile test-suite', () => {
  test('profile renders', () => {
    render(<App />);

    expect(screen.getByText('Halla bro')).toBeInTheDocument();
  });
});
