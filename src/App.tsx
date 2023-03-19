import {useState} from 'react';
import Greeting from './components/Greeting';

export default function App() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Greeting name='world' />
			<img src='/images/test.jpg' alt='Test Image' width='300' />
			<p>Count: {count}</p>
			<button type='button' onClick={handleClick}>
				Click!
			</button>
		</div>
	);
}
