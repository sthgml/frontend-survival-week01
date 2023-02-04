import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='world' />);

	screen.getByText('Hello, world!');

	// 없으면 Error
	screen.getByText(/Hello/);

	// 없으면 Error(X), 없다고 나옴
	expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
