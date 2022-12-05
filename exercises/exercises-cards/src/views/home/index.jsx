
import {} from 'react'
import { Main, Div, H4 } from 'nc-styles-js'

// Cards
import CardJenny from '@views/home/cards/CardJenny01'
import CardAndres from '@views/home/cards/CardAndres'

const Index = () => {
  return (
    <>
      <Main display='grid' justifyContent='center' padding='2rem' backGroundGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textAling='center' colorGray800> EXERCISES CARDS REACT </H4>
        </Div>

        <Div display='grid' gridTemplateColumns='repeat(1, minmax(0, 1fr))' gap='1rem' justifyContent='center'>
          <CardJenny />
          <CardAndres />
        </Div>
      </Main>
    </>
  )
}

export default Index
