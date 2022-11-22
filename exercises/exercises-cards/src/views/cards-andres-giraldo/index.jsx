
import {} from 'react'

// NC Components Base
import Section from '@components/section'
import Div from '@components/div'
import H4 from '@components/h4'

const index = () => {
  return (
    <>
      <Section displayGrid jcCenter padding="2rem" bgGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textCenter textGray800> EXERCISES ANDRES GIRALDO </H4>
        </Div>

        <Div displayGrid gtCol4 gap='1rem' jcCenter>
        </Div>
      </Section>
    </>
  )
}

export default index
