import {} from 'react'

import { Routes, Route } from 'react-router-dom'

// Views
import Home from '@views/home'
import AsyncAwait from '@views/async-await'
import Promises from '@views/promises'
import Axios from '@views/axios'

// Views Promises
import APIPromisesRickAndMorty from '@views/promises/api-rick-and-morty'
import APIPromisesPokemons from '@views/promises/api-pokemons'
import APIPromisesBasicPhotos from '@views/promises/api-basic-photos'

// Views Async Await
import APIAsyncAwaitRickAndMorty from '@views/async-await/api-rick-and-morty'
import APIAsyncAwaitPokemons from '@views/async-await/api-pokemons'
import APIAsyncAwaitBasicPhotos from '@views/async-await/api-basic-photos'

// Views Axios

const routes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/async-await' element={<AsyncAwait />} />
        <Route path='/promises' element={<Promises />} />
        <Route path='/axios' element={<Axios />} />

        <Route path='/promises/api-rick-and-morty' element={<APIPromisesRickAndMorty />} />
        <Route path='/promises/api-pokemons' element={<APIPromisesPokemons />} />
        <Route path='/promises/api-basic-photos' element={<APIPromisesBasicPhotos />} />

        <Route path='/async-await/api-rick-and-morty' element={<APIAsyncAwaitRickAndMorty />} />
        <Route path='/async-await/api-pokemons' element={<APIAsyncAwaitPokemons />} />
        <Route path='/async-await/api-basic-photos' element={<APIAsyncAwaitBasicPhotos />} />
      </Routes>
    </>
  )
}

export default routes
