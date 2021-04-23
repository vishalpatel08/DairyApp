import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import APP from './component/app.js';

ReactDOM.render( < APP / > , document.getElementById("root"))
serviceWorker.unregister();