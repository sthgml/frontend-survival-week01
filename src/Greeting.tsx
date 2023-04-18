import {useState} from 'react';

export default function App({name}: {
	name: string;
}) {
	// Throw Error("!!!");
	return (
		<p>Hello, {name}</p>
	);
}
