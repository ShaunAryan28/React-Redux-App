import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Routes from './Routes.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
