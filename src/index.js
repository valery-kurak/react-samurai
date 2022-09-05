import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'post 1', likesCount: 4},
  {id: 2, message: 'post 2', likesCount: 2}
];

let dialogs = [
  {id: 1, name: 'Valery1'},
  {id: 2, name: 'Valery2'},
  {id: 3, name: 'Valery3'}
];

let messages = [
  {id: 1, message: 'Hi1'},
  {id: 2, message: 'Hi2'},
  {id: 3, message: 'Hi3'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
