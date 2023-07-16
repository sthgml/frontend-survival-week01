import Greeting from './components/Greeting';

export default function App({name}: {name: string}) {
	return (
		<div>
			<Greeting name={name} />
		</div>
	);
}
