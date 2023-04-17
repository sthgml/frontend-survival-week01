import { useState } from 'react';

export default function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>hello world!</p>
      <p>Count: {count}</p>
      <button type="button" onClick={() => {setCount(count + 1)}}>click</button>
    </div>
  );
}