import React from 'react';

export default function Greeting({name}: {
	name: string;
}) {
	return (
		<p>HI {name}</p>
	);
}
