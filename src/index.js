import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import todos from './reducers';
import { addTodo, toggleTodo, editTodo, deleteTodo } from './actions';

const store = createStore(todos);
console.log('Initial State', store.getState());

//Add
store.dispatch(addTodo('Make cappuchino'));
console.log('State after adding first todo', store.getState());
store.dispatch(addTodo('Read the news'));
console.log('State after adding second todo', store.getState());
store.dispatch(addTodo('Go for a run'));
console.log('State after adding third todo', store.getState());

//Toggle

store.dispatch(toggleTodo(0));
console.log('State after toggling first todo', store.getState());
store.dispatch(toggleTodo(1));
console.log('State after toggling second todo', store.getState());
store.dispatch(toggleTodo(2));
console.log('State after toggling third toto', store.getState());

//Edit

store.dispatch(editTodo('Go for a swim', 2));
console.log('State after editing third todo', store.getState());
store.dispatch(editTodo('Make breakfast', 0));
console.log('State after editing the first todo', store.getState());

//Delete

store.dispatch(deleteTodo (1));
console.log('State after deleteing  second todo', store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
