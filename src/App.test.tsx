import {render, screen} from '@testing-library/react';
import App from './App';

test('render Greeting', () => {
	render(<App />);
	const text = screen.getByText(/React App/i);
	expect(text).toBeInTheDocument();
});
