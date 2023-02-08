import { useState } from "react";
import ReactDom from "react-dom/client";
import Greeting from "./components/Greeting";

function App() {
  const [count, setCount] = useState(0);

  const handleSetCount = (num: number) => {
    setCount(num);
  };
  return (
    <>
      <Greeting name="world" />
      <p>world!</p>
      <p>Count: {count}</p>
      <button
        type="button"
        onClick={() => {
          handleSetCount(count + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

// const element = document.getElementById("root");

// if (element) {
//   const root = ReactDom.createRoot(element);
//   root.render(<App />);
// }

export default App;
