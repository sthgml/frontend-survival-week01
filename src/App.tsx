import {useState} from 'react';
export default function App() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p> Hello World! from App!</p>
			<p>Count: {count}</p>
			<button onClick={() => {
				setCount(count + 1);
			}}>Increment</button>
		</div>
	);
}
