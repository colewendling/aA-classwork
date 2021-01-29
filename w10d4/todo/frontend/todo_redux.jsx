import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodo, removeTodo, receiveTodos, todoError } from './actions/todo_actions';
import { receiveStep, removeStep, receiveSteps } from './actions/step_actions';//change to steps


import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    // const root = document.getElementById("root");
    // ReactDOM.render(<h1>Todos App</h1>, root); 
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    window.todoError = todoError;
});