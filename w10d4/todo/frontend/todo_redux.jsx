import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodo } from './actions/todo_actions';


import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    // const root = document.getElementById("root");
    // ReactDOM.render(<h1>Todos App</h1>, root); 
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
});