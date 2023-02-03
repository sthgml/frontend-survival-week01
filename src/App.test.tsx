import {render} from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('render App component', () => {
		const {container} = render(<App />);
		expect(container).toHaveTextContent('hello');
	});
});
