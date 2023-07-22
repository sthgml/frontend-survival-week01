import React from 'react';

import {render, screen} from '@testing-library/react';
import App from '../App';

describe('App', () => {
	it('\'App 컴포넌트입니다. 화면에 보이나요?\' 라는 텍스트가 잘 보여야한다.', () => {
		render(<App />);

		screen.findByText('App 컴포넌트입니다. 화면에 보이나요?');
	});
});
