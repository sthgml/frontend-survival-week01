import {render, screen} from '@testing-library/react';

import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='world'/>);

	screen.getByText('Hello, world!');

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
