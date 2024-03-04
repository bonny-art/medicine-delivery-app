import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';

import { App } from 'components';

import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter basename="/medicine-delivery-app">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
