import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import * as serviceWorker from './serviceWorker.jsx'
import reducer,{initialState} from "./reducer.jsx"
import { AuthProvider } from './Store.jsx'

import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <BrowserRouter>
      <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
);
// serviceWorker.unregister();
