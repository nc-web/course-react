import {} from 'react'

import { Routes, Route } from 'react-router-dom'

// Views
import Home from '@views/home'
import AsyncAwait from '@views/async-await'
import Promises from '@views/promises'
import Axios from '@views/axios'

// Views Promises
import APIBasicPhotos from '@views/promises/api-basic-photos'
import APIRickAndMorty from '@views/promises/api-rick-and-morty'

// Views Async Await 
import APIPokemons from '@views/async-await/api-pokemons'

// Views Axios

const routes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/async-await' element={<AsyncAwait />} />
        <Route path='/promises' element={<Promises />} />
        <Route path='/axios' element={<Axios />} />

        <Route path='/promises/api-basic-photos' />
        <Route path='/promises/api-rick-and-morty' element={<APIRickAndMorty />} />

        <Route path='/async-await/api-pokemons' element={<APIPokemons />} />
      </Routes>
    </>
  )
}

export default routes
