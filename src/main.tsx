import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Router, Switch, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 
)
