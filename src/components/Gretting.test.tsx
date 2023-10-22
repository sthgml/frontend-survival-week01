import { render, screen } from '@testing-library/react';
import Gretting from './Gretting';

describe('Gretting Component Test', () => {
  it('should render Gretting', () => {
    render(<Gretting />);
  });

  it('The component has the text "Hello"', () => {
    render(<Gretting />);

    const target = screen.getByText('Hello');

    expect(target).toBeInTheDocument();
  });
});
