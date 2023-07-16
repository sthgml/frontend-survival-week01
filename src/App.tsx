import {useState} from 'react';
import Greeting from './components/Greeting';

export default function App() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Greeting name='world'/>
			<img src='/images/test.jpg' alt='test image' width='200' />
			<p>Count: {count}</p>
			<button type='button' onClick={() => {
				setCount(count + 1);
			}}>클릭!</button>
		</div>
	);
}

// Type AppProps = {
// 	name?: string;
// };

// export default function App({name = 'world'}: AppProps) {
// 	return (
// 		<p>Hello!!!, {name}</p>
// 	);
// }
