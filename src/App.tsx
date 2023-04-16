import Greeting from './components/Greeting';

function App() {
	return (
		<>
			<img src='/images/test.jpg' alt='test image' width={200}/>
			<Greeting name='world' />
			<p>Hello, world!</p>
		</>
	);
}

export default App;
