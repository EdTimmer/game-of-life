import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStylesCss from './styles/globalStyles.css.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStylesCss />
    <App />
  </React.StrictMode>,
);
