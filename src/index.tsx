import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const init = () => {
	const app = document.getElementById('app');

	if (app) {
		const container = createRoot(app);

		container.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>,
		);
	}
};

init();
