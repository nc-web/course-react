
import { } from 'react'

import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom'

// Routes
import PageMenuInicio from '@pages/MenuInicio'
// import PageContador from 'pages/Contador'
// import PageScrollHooks from 'pages/ScrollHooks'
import PageAPIPokemons from '@pages/APIPokemonsUseEffect'
import PageAPIRickAndMorty from '@pages/APIRickAndMorty'
// import PageContadorHoras from 'pages/ContadorHorasJonMircha'
import PageError from '@pages/ErrorPage'

const routes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact from='/' to='/menu-inicio' element={PageMenuInicio}>
            {/* <Navigate exact from='/' to='/menu-inicio' component={ PageMenuInicio } /> */}
            <Route exact path='/menu-inicio' element={PageMenuInicio} />
            <Route exact path='/api-pokemons' element={PageAPIPokemons} />
            <Route exact path='/api-rick-morty' element={PageAPIRickAndMorty} />
            <Route element={PageError} exact />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default routes
