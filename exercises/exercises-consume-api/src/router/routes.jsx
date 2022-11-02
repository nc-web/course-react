
import { } from 'react'

import { Routes, Route } from 'react-router-dom'

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
      <Routes>
        {/* <Route exact from='/' to='/menu-inicio' element={<PageMenuInicio />} /> */}
        <Route path='/' element={<PageMenuInicio />} />
        <Route path='/menu-inicio' element={<PageMenuInicio />} />
        <Route path='/api-pokemons' element={<PageAPIPokemons />} />
        <Route exact path='/api-rick-morty' element={<PageAPIRickAndMorty />} />
        <Route element={PageError} exact />
      </Routes>
    </>
  )
}

export default routes
