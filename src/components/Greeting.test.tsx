import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';

test('Greeting', () => {
  render(<Greeting name="world" />);

  screen.getByText('Hello, world!');

  screen.getByText(/Hello, world!/);

  expect(screen.queryByText(/Hello, world!/)).toBeTruthy();

  expect(screen.queryByText(/Hello, world!/)).toBeInTheDocument();

  expect(screen.queryByText(/Hi/)).toBeFalsy();

  expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
