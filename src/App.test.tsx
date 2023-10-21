import {render, screen} from '@testing-library/react';
import App from './App';

test('render app component', () => {
	render(<App />);
	expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
