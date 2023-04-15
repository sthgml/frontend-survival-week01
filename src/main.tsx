
import ReactDOM from 'react-dom/client';

import App from './App';

function Demo(){
	return (
		<p>DEMO</p>
	);
}
function main(){
	const element = document.getElementById('root');
	const elementDemo = document.getElementById('demo');
	
	if (!element || !elementDemo) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	const demo = ReactDOM.createRoot(elementDemo);

	root.render(<App name='you' />);
	demo.render(<Demo />);
}

main();
