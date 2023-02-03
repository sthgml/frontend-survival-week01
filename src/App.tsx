import Greeting from './components/Greeting';

export default function App({name}: {name: string}) {
	return (
		<div>
			<Greeting name='greeting' />
			<img src='/images/test.png' alt='test' width={200}/>
			<p>Hello, {name}</p>
		</div>
	);
}
