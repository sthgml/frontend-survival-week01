import Greeting from "./Greeting";
import { render } from '@testing-library/react';

describe('Greeting', () => {
  it('renders greeting message', () => {
    const { container } = render(<Greeting name={"sohee"}/>);

    expect(container).toHaveTextContent('Hello, world!');
  });
});
