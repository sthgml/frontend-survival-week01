import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from './App';

test('App', () => {
  render(<App />);

  screen.getByText('Hello, world!');

  expect(screen.queryByText(/Hello, world!/)).toBeInTheDocument();
});
