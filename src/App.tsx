import {useState} from 'react';

import Greeting from './components/Greating';

export default function App() {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Greeting name='world' />
			<img src='/bono.png' alt='bono' />
			<p>{count}</p>
			<button type='button' onClick={handleClick}>
				클릭!
			</button>
		</div>
	);
}
