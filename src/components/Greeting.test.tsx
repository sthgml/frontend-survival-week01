import React from 'react';
import {render, screen} from '@testing-library/react';

import Greeting from './Greeting';

describe('Greeting', () => {
	it('name props 에 test 를 주입하면, 보여야한다.', () => {
		render(<Greeting name='test'/>);

		expect(screen.getByText('test')).toBeInTheDocument();
	});
});
