import {render, screen} from '@testing-library/react';

import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='길동' />);

	screen.getByText('hello 길동');
});
