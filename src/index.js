import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from "react-ga4";

ReactGA.initialize("G-03SXXB93QS");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
});

ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
