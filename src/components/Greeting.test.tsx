import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('GreetingComponent', () => {
	render(<Greeting name='world' />);

	screen.getByText('Hello, world!');
});
