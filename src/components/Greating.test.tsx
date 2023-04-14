import {render, screen} from '@testing-library/react';

import Greeting from './Greating';

test('Greeting', () => {
	render(<Greeting name='world' />);

	screen.getByText(/Hello/);

	expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
