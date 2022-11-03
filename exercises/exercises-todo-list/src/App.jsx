
import { } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Components Base
import Nav from '@components/nav'
import Ul from '@components/ul'
import Li from '@components/li'
import Main from '@components/main'
import Footer from '@components/footer'
import Div from '@components/div'
import H4 from '@components/h4'
import P from '@components/p'

// Views
import TodoList01 from '@views/todo-list-01'
import TodoList02 from '@views/todo-list-02'

function App () {
  return (
    < >
      <Nav displayFlex jcSpaceBetween aiCenter>
        <Div>
          <H4>TODO LIST</H4>
        </Div>

        <Div displayFlex jcCenter aiCener>
          <Ul><Link to='/'>Todo List 01</Link></Ul>
          <Ul><Link to='/todo-list-02'>Todo List 02</Link></Ul>
        </Div>
      </Nav>
      <Routes>
        <Route path='/' element={<TodoList01 />} />
        <Route path='/todo-list-02' element={<TodoList02 />} />
      </Routes>
    </>
  )
}

export default App
