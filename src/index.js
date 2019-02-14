import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from "./app";
import Router from "./routers"; // eslint-disable-line no-unused-vars

import "./index.css";

import * as serviceWorker from './serviceWorker';

const root = document.getElementById("root");

ReactDOM.render(
	(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	), root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
