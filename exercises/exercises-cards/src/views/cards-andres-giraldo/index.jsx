
import {} from 'react'

// NC Components Base
import Section from '@components/section'
import Div from '@components/div'
import H4 from '@components/h4'

// Cards Styled Components
import CardCall01 from './cards-styled-components/CardCall01' 


const index = () => {
  return (
    <>
      <Section displayGrid jcCenter padding="2rem" bgGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textCenter textGray800> EXERCISES ANDRES GIRALDO </H4>
        </Div>

        <Div displayGrid gtCol2 gap='1rem' jcCenter>
          <CardCall01 />
        </Div>
      </Section>
    </>
  )
}

export default index
