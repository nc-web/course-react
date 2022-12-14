
import { } from 'react'
import { Header, Div, Footer, H2, H6, A, Button, Small } from 'nc-styles-react'

const ErrorPage = () => {
  return (
    <>
      <Header bgColorGray200>
        <Div>
          <H2>ERROR PAGE</H2>
        </Div>

        <Div>
          <A href='/'>
            <Button> Atras </Button>
          </A>
        </Div>
      </Header>
      <Footer bgColorGray600>
        <Div>
          <H6>Newsoft Computer</H6>
          <Small>info@newsoftcomputer.com</Small>
        </Div>
      </Footer>
    </>
  )
}

export default ErrorPage
