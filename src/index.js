import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShoppingList from './ShoppingList';
import * as serviceWorker from './serviceWorker';
import MyElement from "./CreateElement";
import JSXtest from "./JSX";

// ReactDOM.render(<ShoppingList name="Mark" />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<MyElement name="Bozlur"></MyElement>, document.getElementById('root'));

ReactDOM.render(<JSXtest></JSXtest>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
