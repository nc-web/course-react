import React from 'react'
import ReactDOM from 'react-dom/client'

// Component
import TodoListBasic from './views/todo-list/todo-list-basic/TodoListBasic'

// Styles
import './assets/css/global-styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoListBasic />
  </React.StrictMode>,
)
