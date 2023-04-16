import ReactDOM from 'react-dom/client';

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);

  root.render(<p>hello world!</p>);
}