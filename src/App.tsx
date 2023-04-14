import Greeting from './components/Greeting';

type AppProps = {
	name: string;
};

export default function App({name}: AppProps) {
	return (
		<div>
			<Greeting name={name} />
		</div>
	);
}
