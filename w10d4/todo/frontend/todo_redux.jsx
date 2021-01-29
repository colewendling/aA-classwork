import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodo, removeTodo, receiveTodos } from './actions/todo_actions';
import { receiveStep, removeStep, receiveSteps } from './actions/step_actions';//change to steps
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    // window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;

    // const preloadedState = localStorage.state ?
    // JSON.parse(localStorage.state) : {};

    // const store = configureStore(preloadedState);

    const store = configureStore();
    window.store = store;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root); 
});