import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import app_es from "./translations/es/app.json"
import app_en from "./translations/en/app.json"

i18next.init({
  interpolation : {escapeValue: false},
  lng:"en",
  resources:{
    es:{
      global: app_es
    },
    en:{
      global:app_en
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
