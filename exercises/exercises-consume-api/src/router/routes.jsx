
import {  } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Routes
import PageMenuInicio from '@pages/MenuInicio'
//import PageContador from 'pages/Contador'
//import PageScrollHooks from 'pages/ScrollHooks'
import PageAPIPokemons from '@pages/APIPokemonsUseEffect'
import PageAPIRickAndMorty from '@pages/APIRickAndMorty'
//import PageContadorHoras from 'pages/ContadorHorasJonMircha'
import PageError from '@pages/ErrorPage'

const routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/menu-inicio' component={ PageMenuInicio } />
                    <Route exact path='/menu-inicio' component={ PageMenuInicio } />
                    <Route exact path='/api-pokemons' component={ PageAPIPokemons } />
                    <Route exact path='/api-rick-morty' component={ PageAPIRickAndMorty }  />
                    <Route component={ PageError } exact />
                </Switch>
            </Router>
        </>  
    )
}

export default routes
