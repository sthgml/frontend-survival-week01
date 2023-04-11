import {render, screen} from '@testing-library/react';
import App from './App';

test('App', () => {
	render(<App />);

	const count = screen.getByText(/Count/);
	const button = screen.getByRole('button');
	expect(count).toBeInTheDocument();
	expect(button).toBeInTheDocument();
});
