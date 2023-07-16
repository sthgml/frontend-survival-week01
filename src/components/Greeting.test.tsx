import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='world' />);

	const text = screen.getByText(/Hello, world/);
	expect(text).toBeInTheDocument();
});
