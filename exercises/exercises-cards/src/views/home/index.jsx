
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
      <Main displayGrid jcCenter padding="2rem" bgGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textCenter textGray800> EXERCISES CARDS REACT </H4>
        </Div>

        <Div displayGrid gtCol4 gap='1rem' jcCenter>
          <CardJenny />
          <CardAndres />
        </Div>
      </Main>
    </>
  )
}

export default Index
