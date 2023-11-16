import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Navbar(){
  return(
    <nav>
      <h1>
        Fun facts about React
      </h1>
      <ul>
        <li>Was first realeased in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </nav>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
  </div>,
document.getElementById("root"));



