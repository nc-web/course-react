import {} from 'react'

import { Routes, Route } from 'react-router-dom'

// Views
import Home from '@views/home'
import APIBasicPhotos from '@views/api-basic-photos'
import APIPokemons from '@views/api-pokemons'
import APIRickAndMorty from '@views/api-rick-and-morty'

const routes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api-basic-photos' element={<APIBasicPhotos />} />
        <Route path='/api-pokemons' element={<APIPokemons />} />
        <Route path='/api-rick-and-morty' element={<APIRickAndMorty />} />
      </Routes>
    </>
  )
}

export default routes;
