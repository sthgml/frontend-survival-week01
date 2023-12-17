import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';
import React from 'react';

test('Greeting', () => {
	render(<Greeting name='world'></Greeting>);
	screen.getByText(/world/);
});
