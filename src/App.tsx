import {useState} from 'react';
import Greeting from './components/Greeting';

export default function App({name = '이씨'}: {name: string}) {
	const [count, setCount] = useState(0);

	const handelClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Greeting name='world'/>
			<img src='/images/test.jpg' alt='Test image' width='200' />
			<p>Count : {count}</p>
			<button type='button' onClick={handelClick}>상승</button>
		</div>
	);
}
