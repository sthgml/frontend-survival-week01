import ReactDOM from 'react-dom/client';

const element = document.getElementById('root');

function App() {
	return <p>Hello, good!</p>;
}

if (element) {
	const root = ReactDOM.createRoot(element);
	root.render(<App />);
}
