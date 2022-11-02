
import {} from 'react'

// Components Base
import Div from '@components/div'

// Components Advanced
import Calculator from './Calculator01'
import Information from './Information'

const Index = () => {
  return (
    <>
     <Div displayGrid gtCol2>
        <Div>
          <Calculator />
        </Div>
        <Div displayGrid jcCenter aiCenter padding='1rem' margin='1rem'>
          <Information />
        </Div>
     </Div>
    </>
  )
}

export default Index