import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Lesson 1: creating a react element
// const greeting = React.createElement('h1', {}, 'Hello World!');

// Lesson 2: JSX
// const getCurrentDate = () => {	// Arrow functions
// 	const date = new Date();
// 	return date.toDateString();
// }
// const greeting1 = <h1>Hello World! Current Date: {getCurrentDate()}</h1>;




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
