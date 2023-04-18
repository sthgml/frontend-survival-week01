import React from 'react';
import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='world' />);

	// String 그대로 컴포넌트를 찾기에 반드시 그대로 일치해야 함
	screen.getByText('Hello, world!');
	// 정규표현식으로 hello가 있는 지 확인
	screen.getByText('/Hello/');
	// GetByText: 없으면 에러, queryByText: 없으면 없음을 return
	screen.queryByText('/Hi/');

	// 없는 것은 오류 X, 없어야 하는데 없으면 success
	expect(screen.queryByText('/Hello/')).toBeInTheDocument(); // 있어야 한다.
	expect(screen.queryByText('/Hi/')).not.toBeInTheDocument(); // 없어야 한다.

	// 안보여야 한다.(display: none과 같은 것)
	expect(screen.queryByText('/Hi/')).not.toBeVisible();
});
