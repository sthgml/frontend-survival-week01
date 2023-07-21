type AppProps = {
	name?: string;
};

export default function App({name}: AppProps) {
	return <p>{`Hello ${name}`}</p>;
}
