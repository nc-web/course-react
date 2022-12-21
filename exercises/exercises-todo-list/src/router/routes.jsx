
import { Routes, Route } from 'react-router-dom'

// Views
import Home from '@views/home'
import AboutAs from '@views/about-as'

const routes = () => {
  return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-as' element={<AboutAs />} />
            </Routes>
        </>
  )
}

export default routes
