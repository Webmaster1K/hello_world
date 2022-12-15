import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
  <p style={{color: "red"}}><b>Hello World</b></p>
  <p style={{color: "orange"}}><b>Hello World</b></p>
  <p style={{color: "yellow"}}><b>Hello World</b></p>
  <p style={{color: "green"}}><b>Hello World</b></p>
  <p style={{color: "lightblue"}}><b>Hello World</b></p>
  <p style={{color: "blue"}}><b>Hello World</b></p>
  <p style={{color: "purple"}}><b>Hello World</b></p>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
