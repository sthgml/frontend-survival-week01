import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='world'></Greeting>);

	expect(screen.queryByText('hi')).toBeFalsy();
});
