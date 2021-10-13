import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <CssBaseline />
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
