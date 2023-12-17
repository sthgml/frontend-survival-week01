import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('render Greeting', () => {
	render(<Greeting />);
	const text = screen.getByText(/Hello, welcome to React!/i);
	expect(text).toBeInTheDocument();
});
