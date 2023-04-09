import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { meteoApi } from './features/meteo/meteoApi';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApiProvider api={meteoApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

