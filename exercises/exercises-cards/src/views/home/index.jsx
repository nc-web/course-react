
import { } from 'react'

// NC Components Base
import Main from '@components/main'
import Div from '@components/div'
import H4 from '@components/h4'
import P from '@components/p'

// Cards
import CardJenny01 from '@views/nav/cards/CardJenny01'

const Index = () => {
  return (
    <>
        <Main>
          <Div>
            <H4> Home </H4>
          </Div>

          <Div>
            <CardJenny01/>
          </Div>
        </Main>
    </>
  )
}

export default Index
