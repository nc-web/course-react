
import {} from 'react'

// NC Components Base
import Main from '@components/main'
import Div from '@components/div'
import H4 from '@components/h4'

// Cards
import CardJenny from '@views/home/cards/CardJenny01'
import CardAndres from '@views/home/cards/CardAndres'

const Index = () => {
  return (
    <>
      <Main display='Grid' justifyContent='center' padding='2rem' bgGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textAling='center' textGray800> EXERCISES CARDS REACT </H4>
        </Div>

        <Div display='grid' gridTemplateColumns='' gap='1rem' jcCenter>
          <CardJenny />
          <CardAndres />
        </Div>
      </Main>
    </>
  )
}

export default Index
