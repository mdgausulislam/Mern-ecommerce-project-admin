import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import {
//   RouterProvider,
// } from "react-router-dom";
// import { router } from './Routes/Routes.jsx';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import App from './Routes/Routes.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

window.store = store;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
)




