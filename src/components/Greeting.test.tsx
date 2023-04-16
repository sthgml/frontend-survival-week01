import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
  render(<Greeting name="world" />);
  // screen - from react testing library
  screen.getByText('Hello, world!');
  // 못찾으며 에러
  screen.getByText(/Hello/);
  // 못찾아도 에러 x
  expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});

