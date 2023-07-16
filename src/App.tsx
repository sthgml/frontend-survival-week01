import ReactDOM from 'react-dom/client';
import Greeting from './components/Greeting';

export default function App() {
	return (
		<div>
			<Greeting name='world'/>
			<img src='/images/parcel.png' width='200' alt='parcel'/>
			<p>Hello World!</p>
		</div>
	);
}
