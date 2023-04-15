
import ReactDOM from 'react-dom/client';

import App from './App';

function Demo({count}: {count: number}) {
	return (
		<p>DEMO: {count}</p>
	);
}

function main() {
	const element = document.getElementById('root');
	const elementDemo = document.getElementById('demo');

	if (!element || !elementDemo) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	const demo = ReactDOM.createRoot(elementDemo);

	root.render(<App name='you' />);

	let count = 0;

	setInterval(() => {
		count += 1;
		demo.render(<Demo count={count} />);
	}, 1_000);
	demo.render(<Demo count={count}/>);
}

main();
