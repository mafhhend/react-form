import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {FormProvider} from "./store/FormContext"

ReactDOM.render(
  <FormProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </FormProvider>,
  document.getElementById('root')
);