
import { } from 'react'
import { Main, Div, H4 } from 'nc-styles-react'

// Cards
import CardTodoList01 from './cards/CardTodoList01'

const HomeDesktop = () => {
  return (
    <>
      <Main display='grid' justifyContent='center' padding='2rem' bgColorGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textAling='center' colorBlue600> EXERCISES TODO LIST REACT </H4>
        </Div>

        <Div display='grid' gridTemplateColumns='repeat(1, minmax(0, 1fr))' gap='1rem' justifyContent='center'>
          <CardTodoList01 />
        </Div>
      </Main>
    </>
  )
}

export default HomeDesktop
