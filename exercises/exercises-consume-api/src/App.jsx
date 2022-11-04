
import { } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// NC Components Base
import Nav from '@components/nav'
import Ul from '@components/ul'
import Li from '@components/li'
import Main from '@components/main'
import Footer from '@components/footer'
import Div from '@components/div'
import H4 from '@components/h4'
import P from '@components/p'

// Views
import Home from '@views/home'
import APIBasicPhotos from '@views/api-basic-photos'

// Routes
// import Routes from './router/routes'

// Global Styles
import './assets/css/global.css'

function App () {
  return (
    <>
      <Nav displayFlex jcSpaceBetween aiCenter>
        <Div> EXERCISES CONSUME API</Div>
        <Div>
          <Ul><Link to='/'><P>Inicio</P></Link></Ul>
          <Ul><Link to='/api-basic-photos'><P>API Basic Photos</P></Link></Ul>
        </Div>
      </Nav>
      <Main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/api-basic-photos' element={<APIBasicPhotos />} />
        </Routes>
      </Main>
      <Footer>

      </Footer>
      
    </>
  )
}

export default App
