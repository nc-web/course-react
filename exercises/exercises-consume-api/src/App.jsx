
import { Main, Footer } from 'nc-styles-react'

// Nav
import Nav from '@views/menu'

// Routes
import Routes from '@router/routes'

function App () {
  return (
    <>
      <Main>
        <Nav />
        <Routes />
      </Main>
      <Footer>

      </Footer>
    </>
  )
}

export default App
