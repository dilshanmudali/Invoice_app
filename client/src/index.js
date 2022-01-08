import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import './Styles/sidebar.css';
import './Styles/header.css';
import './Styles/category.css';  
import './Styles/products.css';
import './Styles/customers.css';
import './Styles/orders.css';
import './Styles/home.css';
import './Styles/transactions.css';
import './Styles/login.css'
import App from './App';
import reportWebVitals from './reportWebVitals';


 
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
