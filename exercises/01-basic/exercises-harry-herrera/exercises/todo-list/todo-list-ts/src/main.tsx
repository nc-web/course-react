import React from 'react'
import ReactDOM from 'react-dom/client'

// Component
import TodoList01 from './views/todo-list/todo-list-01/TodoList01'
import TodoList02 from './views/todo-list/todo-list-02/TodoList02'
import TodoList03 from './views/todo-list/todo-list-03/TodoList03'

// Styles
import './assets/css/global-styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoList01 />
    <hr></hr>
    <br></br>
    <TodoList02 />
    <hr></hr>
    <br></br>
    <TodoList03 />
  </React.StrictMode>,
)
