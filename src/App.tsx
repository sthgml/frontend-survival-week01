import React from 'react';

import Greeting from './components/Greeting';

export default function App({name}: {
	name: string;
}) {
	return (
		<div>
			<Greeting name='HB'/>
			<p>HELLO {name}!</p>
		</div>
	);
}
