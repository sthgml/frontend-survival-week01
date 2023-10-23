import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export const init = () => {
  const app = document.getElementById('app');

  if (!app) return false;

  const container = createRoot(app);

  container.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );

  return true;
};

init();
