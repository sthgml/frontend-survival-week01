import ReactDom from "react-dom/client";
import App from "./App";

function Demo() {
	return <p>Demo</p>;
}

function main() {
	const element = document.getElementById("root");
	const demo = document.getElementById("demo");
	if (!element || !demo) return;
	const root = ReactDom.createRoot(element);
	const demoRoot = ReactDom.createRoot(demo);
	root.render(<App />);
	demoRoot.render(<Demo />);
}

main();
