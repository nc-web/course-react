
import { Routes, Route } from 'react-router-dom'

// Views
import Home from '@views/home'
import AboutAs from '@views/about'
import TodoList01 from '@views/todo-list-01'

const routes = () => {
  return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-as' element={<AboutAs />} />
                <Route path='/todo-list-01' element={<TodoList01 />} />
            </Routes>
        </>
  )
}

export default routes
