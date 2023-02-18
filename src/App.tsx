import {useState} from 'react';
import Greeting from './components/Greeting';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Greeting name='world' />
			<img src = '/images/test.jpg' alt='Test image' width='200' />
			<p>Count: {count}</p>
			<button type='button' onClick={() => {
				setCount(count + 1);
			}}>
      클릭!
			</button>
		</div>
	);
}
