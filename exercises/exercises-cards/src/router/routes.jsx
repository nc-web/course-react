
import {} from 'react'

// Router
import { Routes, Route } from 'react-router-dom'

// Views
import Home from '@views/home'
import CardJenny01 from '@views/cards-jenny-gomez'
import CardAndres01 from '@views/cards-andres-giraldo'

const routes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/card-jenny' element={<CardJenny01 />} />
            <Route path='/card-andres' element={<CardAndres01 />} />
      </Routes>
    </>
  )
}

export default routes
