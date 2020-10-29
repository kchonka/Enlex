import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Auth0Provider
    domain="enlex.us.auth0.com"
    clientId="2AaItDfFSvrwER2ytzFNX06dJ34vcLJJ"
    redirectUri={"http://localhost:3000/dashboard"}
  >
    <App/>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
