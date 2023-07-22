/** @see https://react.dev/reference/react-dom/client/createRoot */
import ReactDOM from 'react-dom/client';

import App from './App';

// 요소를 선택해서 root 요소로 지정한다.
const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(<App />);
