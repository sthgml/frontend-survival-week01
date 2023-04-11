import {useState} from 'react';
import Greeting from './components/Greeting';

export default function App(): JSX.Element {
	const [count, setCount] = useState<number>(0);
	return (
		<>
			<Greeting name='world' />
			<p>Count: {count} </p>
			<button type='button' onClick={() => {
				setCount(prev => prev + 1);
			}}>클릭</button>
		</>
	);
}
