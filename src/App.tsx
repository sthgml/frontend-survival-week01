import Greeting from "./components/Greeting"

export default function App({ name = 'world' }: { name?: string }) {
	return (
		<>
			<Greeting name="world" />
			<p>Hello, {name}!</p>
			<img src='/images/이미지.png' alt='Test image' width='200' />
		</>
	);
}