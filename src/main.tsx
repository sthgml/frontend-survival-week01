import ReactDOM from 'react-dom/client';
import App from './App';

function Demo({count}: {count: number}) {
	return (
		<p>DEMO: {count}</p>
	);
}

function main() {
	const element = document.getElementById('root');
	const demoEl = document.getElementById('demo');

	if (!element || !demoEl) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	const demo = ReactDOM.createRoot(demoEl);

	root.render(<App />);

	let count = 0;

	demo.render(<Demo count = {count}/>);
	setInterval(() => {
		count += 1;
		demo.render(<Demo count = {count}/>);
	}, 1_000);
}

main();
